const express = require('express');
const multer = require('multer');
const multerconfig = require('./config/multer');

const routes = express.Router();

// Rotas da Controller

const ProductController = require('./controllers/ProdutcController');

// Rotas da Model

const Image = require('./models/Imagens');

// Rota de crud do banco de dados

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.detroy);

// Rotas de cadastro Usuario;

routes.get('/user', (req, res) => {
  return res.json({
    Evento: 'Criando Rotas de cadastro de login',
    DEV: 'Thiago Morgado',
  });
});

// Rota Para subir arquivos UOLOAD

routes.post('/posts', multer(multerconfig).single('file'), async (req, res) => {
  const { originalname: name, size, filename: key } = req.file;

  const image = await Image.create({
    name,
    size,
    key,
    url: '',
  });
  return res.json(image);
});

module.exports = routes;
