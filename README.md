# StarAPI

- Nome do Dev: Lucas Joaquim de Oliveira Soares
- API utilizada: **Star Wars Databank API**
- Documentação da API: https://starwars-databank.vercel.app/

## Funcionalidades:

- Listagem de personagens de Star Wars consumidos diretamente da API na tela inicial.

- Campo de busca que filtra a lista carregada pelo nome em tempo real, localmente, sem nova requisição à API.

- Página de detalhe de cada personagem (imagem e descrição) via rota dinâmica.

- Página "Sobre" trazendo o prólogo do livro de Star Wars.

- Página 404 para rotas inexistentes, indicador de carregamento e mensagem de erro amigável.

## Instruções e link do GitHub:


```bash
# Clone o repositório
git clone https://github.com/LucJamal/StarAPI
cd StarApi

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
