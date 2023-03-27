# ProjetoFullStack-DaniloCardoso

## Documentação da API

Esse projeto foi feito baseado no PostGreSQL, junto com express e typeORM.
Para utiliza-lo é necessario que o servidor esteja rodando em sua maquina ou em algum outro host, tendo que atribuir as váriaves dentro de um arquivo .env com as chaves proposta no env.example.

Use os comandos:
```
yarn -> para instalar todos as 
```
``` 
npm run typeorm migration:run -- -d ./src/data-source/ -> para rodar as migrations
```
```
yarn dev -> para rodar o servidor 
```







#### ROTAS QUE NÃO PRECISAM DE AUTENTICAÇÃO

Login

```
  POST baseURL/login

      body:{
        "email":"teste@mail.com",
	    "password":"1234"
    }
```

```
Resposta:

{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlsb0B0ZXN0ZS5jb20iLCJpYXQiOjE2Njc5MzQ0OTAsImV4cCI6MTY2NzkzODA5MCwic3ViIjoiMSJ9.LcOlJ0588M3IwmDjhhUOqYkXh8aCFfbMbwIinxGB8VY",
}
```

Register

```
  POST baseURL/users

      body:{
	    "fullName":"teste testando testado",
	    "email":"teste@mail.com",
	    "phoneNumber":"(21)111111111",
	    "password":"1234"
      }
```

```
Resposta:

    {
	"id": "608baeee-7229-4511-8566-8bd62d37c1f2"
	"fullName": "teste testando testado",
	"email": "teste@mail.com",
	"phoneNumber": "(21)111111111",
	"isActive": true,
	"updatedAt": "2023-03-23T18:49:40.848Z",
	"createdAt": "2023-03-23T18:49:40.848Z",
    }
```


Listar todos os usuários

```
  GET baseURL/users
```

```
Resposta:

[
	{
		"id": "cdb871ae-5777-4d81-9bd2-8fba82e849f9",
		"fullName": "danilo alves cardoso",
		"email": "teste2@mail.com",
		"phoneNumber": "(21)987654321",
		"isActive": true,
		"updatedAt": "2023-03-23T17:35:21.460Z",
		"createdAt": "2023-03-23T17:35:21.460Z"
	},
	{
		"id": "c55fc94e-079d-42d0-9dbb-2fe07a0dea08",
		"fullName": "danilo teste testando",
		"email": "teste1@mail.com",
		"phoneNumber": "(21)123456789",
		"isActive": true,
		"updatedAt": "2023-03-23T17:36:27.361Z",
		"createdAt": "2023-03-22T23:29:20.507Z"
	},
	{
		"id": "b53513e6-3378-4e78-a4df-ac584f6a903b",
		"fullName": "danilo alves cardoso",
		"email": "teste3@mail.com",
		"phoneNumber": "(21)111111111",
		"isActive": true,
		"updatedAt": "2023-03-23T18:48:24.460Z",
		"createdAt": "2023-03-23T18:48:24.460Z"
	},
	{
		"id": "608baeee-7229-4511-8566-8bd62d37c1f2",
		"fullName": "danilo alves cardoso",
		"email": "teste4@mail.com",
		"phoneNumber": "(21)222222222",
		"isActive": true,
		"updatedAt": "2023-03-23T18:49:40.848Z",
		"createdAt": "2023-03-23T18:49:40.848Z"
	}
]
```

#### ROTAS QUE PRECISAM DE ATUTENTICAÇÃO

```
Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

					Authorization Bearer {token}
```

Listar um usuário específico

```
GET baseURL/users/{id}
```

```
Resposta:

{
	"id": "608baeee-7229-4511-8566-8bd62d37c1f2",
	"fullName": "danilo alves cardoso",
	"email": "teste4@mail.com",
	"phoneNumber": "(21)222222222",
	"isActive": true,
	"updatedAt": "2023-03-23T18:49:40.848Z",
	"createdAt": "2023-03-23T18:49:40.848Z",
	"contacts": [
		{
			"id": "5ec003ae-5bae-4dfb-b415-f007d7b6ffb5",
			"fullName": "danilo teste testando",
			"email": "teste1@mail.com",
			"phoneNumber": "(21)123456789"
		},
		{
			"id": "fd1b3970-203b-4d49-b0be-54e40ef9d830",
			"fullName": "danilo",
			"email": "patched@mail.com",
			"phoneNumber": "(21)99999999"
		}
	]
}
```

Editar perfil do usuário logado

```
PATCH baseURL/users/{myId}

	body{
		"fullName":"danilo teste testando"
	}
```

```
Resposta:
	{
	"id": "b53513e6-3378-4e78-a4df-ac584f6a903b",
	"fullName": "danilo teste testando",
	"email": "teste3@mail.com",
	"phoneNumber": "(21)111111111",
	"isActive": true,
	"createdAt": "2023-03-23T18:48:24.460Z",
	"updatedAt": "2023-03-24T14:29:52.310Z"
	}
```

Deletar Usuario

```
DELETE baseURL/users/{MyId}
```


Registrar um contato

```
POST baseURL/contact
	body{
		"fullName": "danilo alves cardoso",
	    "email": "teste3@mail.com",
	    "phoneNumber": "(21)111111111"
	}
```

```
Resposta:
	{
	"id": "ad2bf2fa-9551-40bc-bd19-ea019a627ffd",
	"fullName": "danilo alves cardoso",
	"email": "teste3@mail.com",
	"phoneNumber": "(21)111111111",
	"createdAt": "2023-03-23T20:33:12.298Z",
	"updatedAt": "2023-03-23T20:33:12.298Z",
	"user": {
		"fullName": "danilo alves cardoso",
		"id": "608baeee-7229-4511-8566-8bd62d37c1f2"
	}
	}
```

Listar um contato

```
GET baseURL/contact/{contactId}
```

```
Resposta:
	{
	"id": "fd1b3970-203b-4d49-b0be-54e40ef9d830",
	"fullName": "danilo",
	"email": "patched@mail.com",
	"phoneNumber": "(21)99999999",
	"createdAt": "2023-03-23T20:04:04.011Z",
	"updatedAt": "2023-03-24T14:04:08.208Z",
	"user": {
		"id": "608baeee-7229-4511-8566-8bd62d37c1f2",
		"fullName": "danilo alves cardoso",
		"email": "teste4@mail.com",
		"phoneNumber": "(21)222222222",
		"isActive": true,
		"createdAt": "2023-03-23T18:49:40.848Z",
		"updatedAt": "2023-03-23T18:49:40.848Z"
	}
	}

    PS:Esse contato é do User
```

Editar um contato

```
PATCH baseURL/contact/{ContactId}
	body{
	"fullName":"danilo",
	"phoneNumber":"(21)99999999",
	"email":"patched@mail.com"
	}
```

```
Resposta:
	{
	"message": "Update contact successfully",
	"contact": {
		"id": "fd1b3970-203b-4d49-b0be-54e40ef9d830",
		"fullName": "danilo",
		"email": "patched@mail.com",
		"phoneNumber": "(21)99999999",
		"createdAt": "2023-03-23T20:04:04.011Z",
		"updatedAt": "2023-03-24T14:04:08.208Z"
	}
	}
```


Deletar Contato

```
DELETE baseURL/contact/{ContactId}
```



