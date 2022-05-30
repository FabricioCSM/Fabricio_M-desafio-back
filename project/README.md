# Projeto Qesh - Ecommerce Fabricio Martins

Projeto feito por Fabricio Martins, para o processo seletivo da statup Qesh. Esse projeto simula um ecommerce, consumindo a API do Mercado Livre, é possivel cadastrar clientes salvando em uma tabela do MySQL, logar com email e senha, procurar por categorias de produtos do Mercado Livre, procurar produtos e simular uma compra de produtos, salvando a movimentação em outra tabela do MySQL.

---

## Utilizando o Docker 🐋

> Rode o serviço `node` com o comando `docker-compose up -d`.
> 
> Rode a imagem com o comando `docker run project_qesh-api`.

## Rodando o projeto localmente

> Instale as dependências com 'npm install'
> ⚠ Utilize a versão do node 16 ⚠

---

## MySQL

> No diretório do projeto renomeia a pasta `.env.example` para `.env` e altere as variáveis de acordo com o seu banco de dados.

> Em seguida acesse a pasta docs, e rode o arquivo `bd_mysql` ou copie o código desse arquivo em um script de uma ferramenta de banco de dados do MySQL para criar a database do projeto e as tables.

---

## Utilizando a API

- Para utilizar a API, rode o projeto com `npm start` e você verá a mensagem: `Server is running on PORT: 3000`
- ⚠ Utilize a ferramenta Insomnia ou Postman para fazer as requisições

### Criar Usuário

- Para criar um usuário, certifique-se de que o banco de dados está rodando e a tabela `qesh`, table `UserModels` e table `PurchaseModels` estão criadas.
- Acesse a ferramenta de sua preferência para fazer requisições http, e através do endpoint `http://localhost:3000/api/v1/users` pelo método POST, adicione no body da requisição um JSON contendo:

{<br/>
  "email": "email_do_usuário",<br/>
  "username": "username_do_usuário",<br/>
  "password": "senha_do_usuário"<br/>
}

-> Um retorno em JSON irá aparecer com os dados do usuário criado, status 1 e a mensagem: "Usuário cadastrado com sucesso"

### Logar usuário

- Para fazer o login, acesse o enpoint `http://localhost:3000/api/v1/login` com o método POST, adicione no body da requisição um JSON contendo:

{<br/>
  "email": "email_usuário_cadastrado",<br/>
  "password": "senha_usuário_cadastrado"<br/>
}

- Caso o usuário seja encontrado no banco de dados, uma resposta em JSON contento mensagem "Logado com sucesso" e o objeto "data", contendo a chave "authToken", o valor dessa chave será o token de autenticação do usuário para fazer todas as requisições da API.


#### ⚠ REQUISIÇÕES DA API ⚠

- Para todas as requisições da API, é necessário incluir no Header das requisições a chave "x-access-token" e o valor recebido após ter feito o login.

---

### Pesquisar por produtos

- Através do endpoint `http://localhost:3000/api-v1/product-categories` você conseguirá pesquisar por todas as categorias de produtos que a API do Mercado Livre oferece, você utilizará o id da categoria para poder pesquisar os produtos dessa categoria.

- Para pesquisar um produto específico da categoria escolhida, utilize o endpoint `http://localhost:3000/api-v1/product-by-categories-query` e no body, acrescente o JSON:

O seguinte campo "query" pode ser vazio, irá aparecer todos os produtos referentes a categoria escolhida, ou oide utilizar o mesmo endpoint, com o campo "categoryId" vazio e fazer a pesquisa no campo "query" por um termo específico.

{<br/>
  "categoryId": "id_da_categoria_escolhida",<br/>
  "query": "termo_de_pesquisa"<br/>
}

- Você pode utilizar o endpoint `http://localhost:3000/api-v1/product-by-id` 

### Realizar compra do Produto

- Para fazer a compra do produto, acesse o endpoint `http://localhost:3000/api/v1/purchase-product` e no body acrescente o JSON:

{<br/>
  "productId": "id_do_produto",<br/>
  "quantity": "quantidade_desejada_para_compra"<br/>
}

- Será retornado um JSON contento a mensagem "Compra efetuada com sucesso" e um objeto "data", contento o ID da compra, o ID do usuário que efetuou a compra, nome do produto, quantidade comprada, total da compra, e a data da efetuação da compra, esses dados foram salvos no banco de dados na tabela `PurchaseModels`

---
