<div align="center">
 <h1>Food Explorer </h1>
 <img src="./public/favicon.png"></img> 
</div>

<div align="center"> 
<a align="center" href="#📁-sobre-o-projeto">Sobre</a> |
<a align="center" href="#⚙️-tecnologias">Tecnologias</a> |
<a align="center" href="#🔎-visualização">Visualização</a> |
<a align="center" href="#📄-tabelas">Tabelas</a> |
<a align="center" href="#💻-instalação">Instalação</a> |
<a align="center" href="#📞-contato">Contato</a> 
</div>

## 📁 Sobre o projeto

O projeto faz parte da semana NLW Expert da Rocketseat, onde na trilha de NodeJS foi apresentado um projeto cujo objetivo é fazer uma API capaz de criar tabelas de enquetes com votação em tempo real.

## ⚙️ Tecnologias

- TypeScript
- Prisma
- Dotenv
- Zod
- NodeJS
- Redis
- PostgreSQL
- Docker
- Fastify
  - Fastify-cookie / Fastify-websocket

## 🔎 Visualização

Para visualizar as rotas com os **HTTP Methods** (GET, POST, PUT, DELETE, ETC) utilizei os seguinte aplicativo:

- Insomnia

⚠️ **IMPORTANTE:** No diretório do projeto dentro da pasta **public** há uma exportação do arquivo que utilizei no Insomnia em JSON para visualizar as rotas com todas as configurações feitas.

## 📄 Tabelas

- Enquetes
- Opções da enquete
- Votos do enquete

## 💻 Instalação

Para realizar o clone do projeto e instalar ele siga estes passos:

> **1. Clone o projeto:**

```bash
$ git clone https://github.com/loren175/expert-polls
```

> **2. Acesse a pasta do projeto:**

```bash
$ cd expert-polls
```

> **3. Instale as dependências:**

```bash
$ npm install
```

> **4. Faça Setup do PostgreSQL e do Redis com:**

```bash
$ docker compose up -d
```

> **5. Configure o .env com .env.example:**

```bash
$ cp .env.example .env
```

> **6. Inicie o servidor com o script:**

```bash
$ npm run dev
```

⚠️ **IMPORTANTE:** Siga as intruções de **.env.example** e crie um **.env** respeitando as configurações passadas no exemplo.


> > ❓ Tenha em mente que é necessário ter instalado em sua máquina o **Docker**,**NodeJS** e o **NPM** para utilizar este projeto localmente.

## 📞 Contato

> rafael.loren175@gmail.com

> +55 (11) 99959-9140

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-mota-084825211/)
