# CRUD Prisma ORM API

Este é um projeto de demonstração de uma API REST conectada a um banco de dados PostgreSQL através da biblioteca Prisma ORM para o gerenciamento de `produtos`. Ela foi desenvolvida utilizando TypeScript e o framework Fastify.

## 🚀 Tecnologias

Este projeto foi desenvolvido para portfólio com as seguintes tecnologias:

- [fastify](https://fastify.dev/)
- [typescript](https://www.typescriptlang.org/)
- [prisma](https://www.prisma.io/)

## ℹ️ Executando

Para clonar e executar este projeto, você precisará de [Git](https://git-scm.com) e [Node.js v12.13](https://nodejs.org/) ou superior instalados no seu computador.

Na sua linha de comando execute:

```bash
# Clonando este repositório
$ git clone https://github.com/augustocesarfmo/crud-prismaorm-backend.git

# Acessando o repositório
$ cd crud-prismaorm-backend

# Instalando as dependências
$ npm install

# Criando o banco de dados PostgreSQL da API com Docker
$ docker compose up -d

# Aplicando as migrações no banco de dados
$ npx prisma migrate dev

# Executando o app
$ npm run dev

# Consumindo a API
  1. Instale a extensão REST Client no VS Code;
  2. Abra o arquivo './client.http';
  3. Clique em 'Send Request' em uma das rota.
```

## 📝 Licença

Este projeto está sob a licença MIT. Consulte a [LICENÇA](https://github.com/augustocesarfmo/crud-prismaorm-backend/blob/main/LICENSE.md) para obter mais informações.

---

by Augusto César Oliveira 👐🏼
