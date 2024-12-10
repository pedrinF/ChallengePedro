# ChallengePedro

Olá, meu nome é **Pedro**, sou estudante da área de tecnologia e desenvolvi essa aplicação como parte do **Kontulari Challenge**. A proposta é criar uma aplicação que interage com a API do GitHub para buscar e exibir informações sobre os repositórios de usuários, mostrando detalhes como nome do repositório, URL e tipo de visibilidade (público ou privado).

## O que é essa aplicação?

Esta aplicação permite que você busque usuários do GitHub e visualize os repositórios públicos que eles possuem. Ao buscar por um usuário, são exibidas informações como:

- Avatar do usuário
- Nome de usuário
- Lista de repositórios com detalhes como o nome, a URL e a visibilidade.

## Como Rodar a Aplicação

Para rodar a aplicação, você precisará configurar tanto o **backend** quanto o **frontend**. A aplicação foi dividida em duas partes: 

1. **[GitHub API](./githubApi/README.md)** – Backend da aplicação, responsável por fazer as requisições à API do GitHub e fornecer os dados dos repositórios e do usuário.
2. **[React Frontend](./react-front/README.md)** – Frontend da aplicação, desenvolvido com React, que consome a API criada no backend para exibir as informações para o usuário.

### Passos para rodar:

1. Leia o **README.md** do **[GitHub API](./githubApi/README.md)** primeiro, para configurar e rodar o servidor backend.
2. Após o backend estar rodando, leia o **README.md** do **[React Frontend](./react-front/README.md)** para configurar e rodar o frontend da aplicação.

## Sobre o Desenvolvimento

Essa aplicação foi desenvolvida como parte de um desafio para aplicar conhecimentos adquiridos sobre APIs, consumo de dados, autenticação e React. 

A interface foi construída utilizando **React** e **Material UI**, com foco na experiência do usuário e na simplicidade de uso.

## Explicação da Estrutura de Pastas Utilizada no Projeto

O projeto foi organizado de maneira a separar claramente as responsabilidades de cada parte da aplicação, dividindo o **backend** e o **frontend** em pastas distintas.


O backend (pasta `githubApi`) é responsável por fazer a comunicação com a API do GitHub para obter dados dos repositórios e usuários. O frontend (pasta `react-front`) é a interface que consome essas informações e as exibe para o usuário.

---

## Descrição do Desenvolvimento

### 1. Início com o Backend

O primeiro passo no desenvolvimento foi a criação do **backend**, com a construção da API que se comunica com o GitHub. A ideia inicial foi fornecer uma endpoint para que o frontend pudesse buscar os repositórios de um usuário do GitHub.

A estrutura do backend foi organizada com uma separação clara entre os **controladores**, **modelos** e **rotas**, facilitando a manutenção e escalabilidade do código. A lógica da API foi implementada para receber um nome de usuário, acessar os dados de repositórios via API do GitHub e retornar as informações relevantes.

### 2. Alterações nos Dados Consumidos

Durante o desenvolvimento, percebi que seria interessante melhorar a apresentação das informações, especialmente em relação à data de criação dos repositórios. Inicialmente, a data era retornada no formato UTC bruto, o que não era muito amigável para o usuário. Para melhorar isso, implementei uma formatação de data mais legível, utilizando o formato `DD/MM/YYYY`.

Além disso, percebi que a exibição do **login do usuário** e do **avatar** era importante para oferecer uma experiência mais personalizada. Decidi então alterar a API para incluir essas informações na resposta dos dados, de forma que o frontend pudesse mostrá-las logo no topo da página. Essas mudanças foram refletidas tanto na lógica do backend, quanto na estrutura do JSON retornado pela API.

### 3. Implementação do Frontend

Com o backend pronto e os dados estruturados de acordo com as necessidades do frontend, comecei a implementar o **frontend**. O objetivo era criar uma interface simples e intuitiva onde o usuário pudesse buscar por outros usuários do GitHub e ver os seus repositórios.

Para isso, utilizei **React** e **Material-UI**. A interface foi projetada para ser responsiva e funcional, com campos para inserir o nome do usuário e exibir os repositórios e informações de perfil de forma clara.

Durante a implementação, os dados recebidos da API foram usados para exibir o avatar e o nome do usuário no topo da página, criando uma experiência visual mais envolvente.

### 4. Integração entre Backend e Frontend

A integração entre o frontend e o backend foi feita utilizando **axios** para realizar as requisições à API que foi construída no backend. O frontend solicita os dados dos repositórios e, ao mesmo tempo, recupera o login e avatar do usuário para exibição. O fluxo de dados é simples e direto, com chamadas assíncronas ao backend e renderização dinâmica da interface.

---

## Resumo

O projeto foi desenvolvido em etapas claras, começando pela construção da API no **backend** e depois implementando a **interface** no **frontend** para consumir e exibir esses dados. Durante o desenvolvimento, fiz ajustes na estrutura dos dados e na apresentação das informações, como a formatação de data e a exibição do login e avatar do usuário. O resultado é uma aplicação funcional que permite visualizar facilmente os repositórios de qualquer usuário do GitHub.

## Contato

Caso tenha dúvidas ou queira entrar em contato, você pode me encontrar nas redes sociais ou me enviar um e-mail.

Obrigado por conferir o projeto!
