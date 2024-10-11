const express = require('express');
const routes = require('./routes/routes')
const ejs = require('ejs');
const bodyParser = require('body-parser');

const Article = require('./article/ArticleModel');
const Category = require('./categories/CategoriesModel');

const server =  express();
const port = 3000;

server.use(bodyParser.urlencoded({extended : false}));
server.use(bodyParser.json());

server.set('view engine', 'ejs');
server.use('/', routes);

server.listen(port, () =>{console.log('Servidor rodando em: http://localhost:'+port)});