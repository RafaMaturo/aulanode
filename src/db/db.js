//CONFIGURAÇÃO DO BANCO DE DADOS MYSQL
const mysql = require('mysql'); //importando MYSQL

//Configurando uma conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'pizzariaT',
})//Preencher de acordo com o seu banco de dados

//testar a conexão com o MYSQL
db.connect((err) =>{
    if (err) {
        console.error('Erro ao conectar ao MySQL', err);
    } else {
        console.log('Conectado ao MySQL');
    }
});

module.exports=db//aqui declaramos que esta construção sera um modulo e que iremos exportar para ser usado.