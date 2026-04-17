import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { products } from "@shared/products";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createPagBankCheckout } from "./pagbank";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  checkout: router({
    create: publicProcedure
      .input(
        z.object({
          productId: z.string().min(1),
          origin: z.string().url(),
        }),
      )
      .mutation(async ({ input }) => {
        const product = products.find(item => item.id === input.productId);

        if (!product) {
          throw new Error("Produto não encontrado para criar o checkout.");
        }

        const result = await createPagBankCheckout(product, input.origin);

        return {
          productId: product.id,
          productName: product.name,
          ...result,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
