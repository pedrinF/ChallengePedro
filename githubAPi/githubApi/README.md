:mortar_board: Sobre o Projeto
O GitHubAPI é uma aplicação backend desenvolvida utilizando o Spring Boot 3 e Spring WebFlux, com o objetivo de consumir a API do GitHub de maneira eficiente, fornecendo uma interface para buscar e listar repositórios públicos de usuários do GitHub.

Este projeto tem como foco mostrar minha habilidade em desenvolver soluções robustas e escaláveis com Java e Spring, além de integrar com APIs externas de forma eficiente.

:package: Tecnologias Usadas
Spring Boot 3.x - Framework principal para desenvolvimento do backend.
Spring WebFlux - Utilizado para implementar o consumo assíncrono da API do GitHub.
Java 21 - A versão do Java usada no desenvolvimento.
Maven - Gerenciamento de dependências e build automation.
Spring Boot Starter Test - Testes de integração e unitários para garantir a qualidade do código.
:computer: Funcionalidades
Busca de Usuários: Consome a API pública do GitHub para buscar repositórios de um usuário.
Exibição de Detalhes do Repositório: Mostra informações como nome, URL, visibilidade (público ou privado) e data de criação do repositório.
Interface Simples e Eficiente: Utiliza o padrão WebFlux para garantir que o consumo de dados do GitHub seja assíncrono e escalável.
:wrench: Como Executar
Clone o repositório:

bash
git clone https://github.com/tech-pedro/github.git
Navegue até a pasta do projeto:

bash
cd github
Certifique-se de que o Maven esteja instalado no seu sistema, e então execute:

bash
mvn clean install
Execute o projeto com o comando:

bash
mvn spring-boot:run
O servidor será iniciado em http://localhost:8080.