<h1 align="center">Desafio 01 Formação Nodejs</h1>

<h4 align="center"> 
	✅  JS, Node 🚀 Finished...  ✅
</h4>

💻 Descrição
=======================
<p align="center">Desenvolver uma API para realizar o CRUD de suas *tasks* (tarefas).</p>

<a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
</a>
<a href="https://nodejs.org/en" target="_blank">
    <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/>
</a>

🚀 Funcionalidades
=======================
<h3>A API deve conter as seguintes funcionalidades:</h3>
<ul>
    <li>Criação de uma task</li>
    <li>Listagem de todas as tasks</li>
    <li>Atualização de uma task pelo `id`</li>
    <li>Remover uma task pelo `id`</li>
    <li>Marcar pelo `id` uma task como completa</li>
    <li>E o verdadeiro desafio: Importação de tasks em massa por um arquivo CSV</li>
</ul>

📃 Regras de negócio
=======================
Antes das rotas, vamos entender qual a estrutura (propriedades) que uma task deve ter:

- `id` - Identificador único de cada task
- `title` - Título da task
- `description` - Descrição detalhada da task
- `completed_at` - Data de quando a task foi concluída. O valor inicial deve ser `null`
- `created_at` - Data de quando a task foi criada.
- `updated_at` - Deve ser sempre alterado para a data de quando a task foi atualizada.

🛣️ Rotas:
=======================
- `POST - /tasks`
    
        Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
    
        Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
    
- `GET - /tasks`
    
        Deve ser possível listar todas as tasks salvas no banco de dados.
    
        Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`
    
- `PUT - /tasks/:id`
    
        Deve ser possível atualizar uma task pelo `id`.
    
        No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
    
        Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
    
        Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
    
- `DELETE - /tasks/:id`
    
        Deve ser possível remover uma task pelo `id`.
    
        Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
    
- `PATCH - /tasks/:id/complete`
    
        Deve ser possível marcar a task como completa ou não. Isso significa que se a task estiver concluída, deve voltar ao seu estado “normal”.
    
        Antes da alteração, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.

💭 Considerações do Dev:
=======================
Com relação ao desafio, eu fiz de maneira um pouco diferente do solicitado no desafio. Eu resolvi criar uma nova rota:
- `POST - /tasks/import`

Esta recebe um arquivo CSV e realiza o cadastro de cada nova tarefa no servidor.

Veja a pasta ".github", tem uma collection com as requisições para você importar no Insomnia ✌️

📑 Requirements
=======================
Antes de começar, você deve ter instalado as seguintes ferramentas na sua máquina: [NODE](https://nodejs.org/en), [GIT](https://git-scm.com/downloads). Também é importante que tenha um editor de código para trabalhar, tal como o [VSCode](https://code.visualstudio.com/).

```bash
# Para executar o servidor, abra o arquivo na pasta "src" e execute o seguinte código
$ node src/server.js
```

😎 Author
=======================
<a href="https://https://github.com/J-Neto"><img src="https://avatars.githubusercontent.com/u/49914443?v=4" width="100px;" alt=""/><br><p><b>José Neto</b> 👽</p></a>

Made with ❤️ by José Neto 👋🏽 Get in touch!

<a href="https://www.linkedin.com/in/jos%C3%A9-neto-299920152/"> <img src="https://img.shields.io/badge/LinkedIn-%230A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a> 