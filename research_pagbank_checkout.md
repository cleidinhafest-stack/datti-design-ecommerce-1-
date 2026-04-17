# Pesquisa inicial sobre Checkout PagBank

## Constatações verificadas

A página comercial do **Checkout PagBank** informa que a solução foi pensada para integrar uma página de pagamento ao e-commerce, site ou loja virtual, com experiência simplificada e vários meios de pagamento.

| Aspecto | Evidência observada |
| --- | --- |
| Propósito | Página de pagamento integrada ao e-commerce, site ou loja virtual |
| Meios de pagamento citados | Cartões de crédito e débito, Pix e boleto |
| Parcelamento | O site informa oferta de vendas no crédito e parcelado |
| Valor estratégico | Mais opções de pagamento e experiência simplificada |
| Alternativa citada pelo próprio PagBank | Checkout Transparente para criar tela própria de pagamento |

## Implicações para o projeto

Para a Datti Design, a solução mais coerente tende a ser um **checkout hospedado ou checkout do próprio PagBank** acionado a partir do botão "Comprar agora", evitando depender de links individuais por produto neste primeiro momento. Ainda assim, a implementação real provavelmente exigirá documentação técnica específica, credenciais seguras e uma camada de backend para criação de pedidos/sessões sem expor segredos no navegador.

## Evidências técnicas do portal de desenvolvedores

A documentação técnica do **Checkout and Payment Link** do PagBank descreve um fluxo em que a aplicação cria uma página de pagamento via endpoint de checkout, recebe um identificador e um link `PAY`, e então redireciona o comprador para a página hospedada do PagBank. Nessa criação do checkout, é possível definir a `redirect_url`, os meios de pagamento disponíveis e o limite de parcelas.

A documentação também lista, como métodos disponíveis, **cartão de crédito, cartão de débito, Pix, boleto** e **Pay with PagBank**. Já a página introdutória das APIs informa que o **Checkout PagBank** redireciona o cliente para uma página exclusiva do PagBank e destaca que APIs de pedidos e pagamentos suportam crédito, débito, boleto e Pix, além de webhooks, tokenização de cartões e homologação em sandbox.

## Conclusão técnica preliminar

| Ponto | Conclusão |
| --- | --- |
| Modelo mais adequado para esta fase | Checkout hospedado do PagBank criado dinamicamente por API |
| Compatibilidade com o pedido do usuário | Alta, porque o comprador escolhe o método na página do PagBank |
| Necessidade de backend | Alta, para criar o checkout com autenticação segura sem expor credenciais |
| Necessidade de segredos/credenciais | Sim, para autenticar chamadas à API PagBank |
| Próximo passo lógico | Habilitar backend no projeto e implementar rota segura para criação do checkout |
