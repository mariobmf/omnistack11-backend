const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileOngController = require('./controllers/ProfileOngController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);

routes.get('/profile/', ProfileOngController.index);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents/', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
