//Importação de depedencias
require('dotenv').config(); //Carrega Variaveis de ambiente de um arquivo .env
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/routes');
const db = require('./db/db');//modulo de conexão cm o banco de dados

//inicialização do banco de dados
const app = express();
//Middlewares de segurança e utilidades
app.use(helmet()); //protege a aplicação com headers de segurança
app.use(cors()); //habilita o cors
app.use(morgan('dev')); //loga as requisições no console
app.use(express.json()); //converte os dados recebidos para JSON

//servindo arquivos estaticos
app.use(express.static(path.join(__dirname, 'public'))); //Pasta de arquivos estaticos

//rota para servir o home.html
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, 'pages', 'home.html'))
});

//configuração de rotas
app.use('/', routes);

//middleware de tratamento de erros
app.use ((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send('Algo deu Errado!');
});

//inicialização do servidor
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
