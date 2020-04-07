const express = require('express');
const multer = require('multer');
const multerconfig = require('./config/multer');

const routes = express.Router();

// Rotas da Controller

const ProductController = require('./controllers/ProdutcController');
const ImageController = require('./controllers/ImageController');
const UserController = require('./controllers/UserController');

// Rotas da Model

// Rota de crud do banco de dados

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.detroy);

// Rotas de cadastro Usuario;

routes.get('/user', UserController.useindex);
routes.get('/user/:id', UserController.useshow);
routes.post('/user', UserController.usestore);
routes.put('/user', UserController.useupdate);
routes.delete('/user', UserController.usedetroy);

// Rota Para subir arquivos UOLOAD

routes.post(
  '/posts',
  multer(multerconfig).single('file'),
  ImageController.uploads
);
routes.get('/posts', ImageController.index);
routes.get('/posts/:id', ImageController.show);

routes.get('/msg', (res, req) => {
  res.send('hello thiao');
});

module.exports = routes;
