# Ivory Technical Challenge

## Rodar o postgres via Docker

Cole o comando abaixo no terminal e rode:

```
$ docker run --name ivory-technical-challenge -e POSTGRES_PASSWORD=docker -d postgres
```

Use alguma ferramente(Ex.:DBeaver) para se conectar ao Postgres, em seguida crie um banco de dados em UTF-8 com esse nome:

```
ivory_technical_challenge
```

## Importe os dados

Importe os dados do arquivo no estilo .csv no arquivo para a base de dados ivory_technical_challenge:

```
./Base de Dados - Funcionários.txt
```

## Instale o Yarn

```
npm install -g yarn
```

## Acesse a pasta back-end e instale as dependências do node

```
cd back-end
```

Em seguida:

```
yarn install
```

## Rodar as migrations

Para rodar as migrations:

```
yarn typeorm migration:run
```

# Rodar a API

Para rodar a API:

```
yarn dev:server
```

## Acesse a pasta front-end e instale as dependências do node

```
cd front-end
```

Em seguida:

```
yarn install
```

## Rodar o React

Para rodar o react:

```
yarn start
```

# Rodar o front

Para acessar o sistema, acesse:

```
http://localhost:3000
```

## Cadastre um Usuário

Para entrar no sistema, clique no link "Cadastra-se" e cadastra-se um usuário, fornecendo email, nome e senha.

Em seguida, clique no link "Entrar" e entre com o login recém criado.

## Utilize os serviços

Não precisa clicar em botão "Procurar" para encontrar, ao digitar, ele já faz a busca.

# Documentação da API(Swagger)

Depois de rodar a API, acesse no navegador:

```
http://localhost:3333/docs
```
