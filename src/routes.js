const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const FileController = require('./controllers/FileController');
const UserController = require('./controllers/UserController');
const MusicController = require('./controllers/MusicController');
const BandaController = require('./controllers/BandaController');
const EventoController = require('./controllers/EventoController');

const routes = new Router();

const upload = multer(multerConfig);

routes.post('/file', upload.single('file'), FileController.store);
routes.get('/files', FileController.index);

routes.post('/user', UserController.store);
routes.put('/user', UserController.update);
routes.get('/user', UserController.show);


routes.post('/banda', BandaController.store);

routes.get('/bandas', BandaController.index);
routes.put('/banda/:id', BandaController.update);

routes.get('/banda/:id', BandaController.show);

routes.post('/evento', EventoController.store);
routes.get('/eventos', EventoController.index);
routes.put('/evento/:id', EventoController.update);



routes.post('/music', upload.single('file'), MusicController.store);


module.exports = routes;