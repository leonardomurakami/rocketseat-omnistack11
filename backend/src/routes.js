const express = require('express'); //import express

const routes = express.Router(); //estamos desacoplando o sistema de rotas do express para uma nova variavel

routes.get('/', (request, response) => {
    // return response.send('Hello World') <- returns text
    const params = request.query;

    return response.json({
        name: 'Leonardo Heidi Almeida Murakami',
        event: 'Participant at Omnistack 11.0 Week'
    })
}) // metodo que estava na file `index.js`

module.exports = routes; // variavel a ser exportada pelo script