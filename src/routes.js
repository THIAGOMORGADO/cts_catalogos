const express = require('express');
const multer = require('multer');
const multerconfig = require('./config/multer');

const routes = express.Router();

const ProductController = require('./controllers/ProdutcController');

// Rota de crud do banco de dados

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.detroy);

// Rota Para subir arquivos UOLOAD

routes.post('/posts', multer(multerconfig).single('file'), (req, res) => {
  console.log(req.file);
  return res.json({
    Evento: 'Subindo Imagens com sucesso',
  });
});

module.exports = routes;
