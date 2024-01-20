# CRUD Prisma ORM backend

Este é um projeto de demonstração de uma API REST conectada a um banco de dados PostgreSQL para o gerenciamento de produtos. Ela foi desenvolvida utilizando TypeScript e o framework Fastify.

## 🚀 Tecnologias

Este projeto foi desenvolvido para portfólio com as seguintes tecnologias:

- [fastify](https://fastify.dev/)
- [typescript](https://www.typescriptlang.org/)
- [prisma](https://www.prisma.io/)

## ℹ️ Executando

Para clonar e executar este projeto, execute na sua linha de comando:

```bash
# Clonando este repositório
$ git clone https://github.com/augustocesarfmo/crud-prismaorm-backend.git

# Acessando o repositório
$ cd crud-prismaorm-backend

# Instalando as dependências
$ npm install

# Configurando as variáveis de ambiente
> renomeie o arquivo '.env.example' para '.env'

# Configurando o banco de dados PostgreSQL com o Docker
$ docker compose up -d

# Realizando migrações
$ npx prisma migrate dev

# Executando o app
$ npm run dev

# Testando as rotas
1. Instale a extensão REST Client no VS Code;
2. Abra o arquivo './src/http/index.http';
3. Clique em 'Send Request' em qualquer rota.
```

## 📝 Licença

Este projeto está sob a licença MIT. Consulte a [LICENÇA](https://github.com/augustocesarfmo/crud-prismaorm-backend/blob/main/LICENSE.md) para obter mais informações.

---

by Augusto César Oliveira 👐🏼
