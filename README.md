# ReactShop — projeto de aula

Loja virtual de estudo com React, Vite, React Router e Font Awesome.

## Executar

1. Instale as dependências com `npm install`.
2. Configure `VITE_API_URL` no arquivo `.env` com o endereço da API utilizada na aula.
3. Execute `npm run dev`.

O catálogo usa `/products/category/electronics` e `/products/category/jewelery`.
A página de detalhes usa `/products/:id`. A API deve retornar produtos com
`id`, `title`, `image`, `price`, `category`, `description` e `rating.rate`.

## Como o código funciona

- `main.jsx`: importa os estilos e define as rotas.
- `App.jsx`: monta a página inicial com os componentes.
- `components`: cabeçalho, rodapé, categorias, benefícios e produtos.
- `pages`: catálogo, detalhes, contato e página não encontrada.
- Props passam valores e funções do componente pai para os filhos.
- `useState` guarda o contador e os dados exibidos na tela.
- `useEffect` busca os produtos da API.
- `map` mostra uma lista de produtos sem repetir o mesmo JSX.

Cada clique em “Adicionar ao carrinho” soma 1 ao contador da página.
O contador reinicia ao sair da página ou recarregar. Não existe compra,
pagamento, armazenamento de itens ou página de carrinho.

Os ícones são do Font Awesome instalado no projeto. Os contatos e perfis
sociais reais ainda não foram cadastrados.

## Verificar

- `npm run lint`: verifica problemas no código.
- `npm run build`: gera a versão de produção.
