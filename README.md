<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



<br><br><br>

<h1 align="center">API Coworking</h1>
<h4 align="center">Uma API REST para gestão completa, rápida e segura de seu coworking</h4>

## Sobre o projeto
Este projeto tem como finalidade atestar meus conhecimentos nos seguintes pontos:
 
- Desenvolvimento de aplicações [Node](http://nodejs.org)
- Desenvolvimento de API's REST utilizando [Nest](https://github.com/nestjs/nest)
- ORM [TypeOrm](https://orkhan.gitbook.io/typeorm/)
- Arquitetura [DDD](https://medium.com/cwi-software/domain-driven-design-do-in%C3%ADcio-ao-c%C3%B3digo-569b23cb3d47)
- Implementação de Camadas:
	- [Repository](https://renicius-pagotto.medium.com/entendendo-o-repository-pattern-fcdd0c36b63b)
	- [Service](https://davislevine.medium.com/service-design-patterns-930203c8df37)
	- [Dto](https://medium.com/@orcunyilmazoy/the-dto-pattern-data-transfer-objects-8146b262636e)

## Por que este projeto?
- Este projeto faz parte do meu portfólio pessoal, uma maneira de comprovar meus conhecimentos em [Nest](https://github.com/nestjs/nest).
- A construção de API's faz parte da rotina de um desenvolvedor back-end, então esse projeto serviu como uma simulação da rotina real de um desenvolvedor back-end atuando com [Nest](https://github.com/nestjs/nest).

## Sobre a modelagem do Banco de Dados
- O desafio consistia na construção de uma API REST utilizando Nest que permitisse o gerenciamento de recursos importantes para o rotina de um coworking.
- Para o desafio foram criadas as seguintes tabelas:
	
| Table | Description |
| ------------| --- |
| coworkings | Contêm todos os coworkings |
| services | Contêm todos os serviços passíveis de serem prestados pelos coworkings |
| coworking_services | Contêm os servicços prestados por cada coworking |
| rooms | Contêm as salas de cada coworking |
| customers | Contêm todos os clientes |
| schedules | Contêm todos os agendamentos |


## Setup
1. Clone o repositório
2. Acesse a raíz do projeto. 
3. Execute o comando:

```bash
$ yarn install
```
4. Uma vez que as dependências tenham sido devidamente intaladas, você pode executar:

```bash
# development
$ yarn run start
```

```bash
# watch mode
$ yarn run start:dev
```

```bash
# production mode
$ yarn run start:prod
```

7. O projeto deve estar disponível no endereco: [localhost:3000/](http://localhost:3000/) 

## Observações importantes
- É aconselhável que você tenha em sua máquina o [postman](https://www.postman.com/) para que possa fazer os devidos testes sobre as rotas disponíveis nesta API.

## Dependências e suas versões
- [Node](https://nodejs.org/en) 20.6.1
- [Npm](https://www.npmjs.com/) 9,8,1
- [Yarn](https://yarnpkg.com/) 1.22.19
- [MySQL](https://www.mysql.com/)

## Observações importantes
- Tenha as collections necessárias para testar [clicando aqui](https://github.com/lucasfullstackdev/coworking/blob/develop/collections.json)
- Veja a documentação completa em [http://localhost:3000/api](http://localhost:3000/api)

## Considerações finais
- API ainda passará por alterações, esta API não representa uma amostra real, devendo ser utilizada apenas para se ter uma noção sobre como funciona um API REST.
- Qualquer dúvida ou sugestão, entre em contato pelo e-mail: lucas.fullstack.dev@gmail.com
