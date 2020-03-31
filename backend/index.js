const express = require('express'); // import express da maneira javascript
const app = express(); // atribui o nosso aplicativo ao pacote express

app.get('/', (request, response) => {
    // return response.send('Hello World') <- returns text
    return response.json({
        name: 'Leonardo Heidi Almeida Murakami',
        event: 'Participant at Omnistack 11.0 Week'
    })
})

app.listen(3333); // disponibiliza o aplicativo (quando rodado pelo node) na porta 3333
