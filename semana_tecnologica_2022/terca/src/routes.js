const express = require('express');
const Cadastro = require('./Controllers/Cadastro');
const routes = express.Router();


routes.post('/cadastrar', Cadastro.cadastrar);
routes.get('/recuperarCadastros', Cadastro.recuperar);
routes.get('/recuperarPorId', Cadastro.recuperarPorId);
routes.delete('/deletar', Cadastro.deletar);
module.exports = routes;