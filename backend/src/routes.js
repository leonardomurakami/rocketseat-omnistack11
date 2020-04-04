const express = require('express'); //import express

const ongController = require('./controllers/ongsController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router(); //estamos desacoplando o sistema de rotas do express para uma nova variavel

// /sessions methods
routes.post('/session', sessionController.create)
// /ongs methods
routes.post('/ongs', ongController.create);
routes.get('/ongs', ongController.index);
// /incidents methods
routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);
// /profile methods
routes.get('/profile', profileController.index);

module.exports = routes; // variavel a ser exportada pelo script