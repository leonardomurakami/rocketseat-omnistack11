const express = require('express'); // import express da maneira javascript
const routes = require('./routes'); // import objeto routes da file routes.js (necessario o `./` que indica que estamos importando de uma file e não de uma biblioteca)

const app = express(); // atribui o nosso aplicativo ao pacote express

app.use(express.json());

app.use(routes); // utilizar as rotas de routes

app.listen(3333); // disponibiliza o aplicativo (quando rodado pelo node) na porta 3333
