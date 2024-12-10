ChallengePedro - React Frontend

Este é o frontend do projeto ChallengePedro, desenvolvido com React. Ele permite que você interaja com a API para visualizar e buscar informações de usuários e repositórios do GitHub.

Pré-requisitos

Antes de rodar o projeto, é necessário ter os seguintes programas instalados na sua máquina:

 [Node.js](https://nodejs.org/) (versão recomendada: 16.x ou superior)
 [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js, que vem junto com o Node.js)

Passo a Passo para Rodar o Projeto

Clonar o Repositório

Primeiramente, caso nao tenha clonado ainda clone o repositório do projeto para o seu ambiente local. Execute o seguinte comando no terminal:
Lembrando que é necessario ler o readme.md da githubApi para rodar o backend
git clone https://github.com/pedrinF/ChallengePedro.git

Navegar até a Pasta do Frontend
Após clonar o repositório, navegue até a pasta onde o projeto frontend está localizado, que neste caso é react-front:

cd ChallengePedro/react-front
3. Instalar Dependências
Dentro da pasta do projeto (react-front), execute o comando abaixo para instalar todas as dependências necessárias:

npm install
Esse comando irá instalar todos os pacotes e bibliotecas definidas no arquivo package.json.

Configurar o Token do GitHub
Este projeto utiliza a API do GitHub para buscar dados de usuários e repositórios. Para autenticação, você precisará de um token de acesso pessoal do GitHub.

Passos para gerar o token:
Acesse GitHub Settings > Developer Settings > Personal Access Tokens.
Clique em Generate new token, escolha as permissões necessárias (geralmente, o acesso público é suficiente) e clique em Generate token.
Copie o token gerado, pois ele será necessário para a autenticação.
Configurando o token no projeto:
Na raiz da pasta react-front, crie um arquivo .env.
Adicione a seguinte linha ao arquivo .env:
VITE_GITHUB_TOKEN=seu-token-aqui
Substitua seu-token-aqui pelo token que você gerou no GitHub.

Rodar a Aplicação Localmente
Agora que as dependências estão instaladas e o token está configurado, você pode iniciar o servidor de desenvolvimento.

Execute o comando abaixo para rodar o projeto localmente:

npm run dev
Isso iniciará o servidor de desenvolvimento e você poderá acessar a aplicação no navegador em:

http://localhost:5173