const Sequelize = require('sequelize');

console.log(process.env.ENVIRONMENT);

let database = 'robogarden_app';
let username = 'root';
let password = '';

//In heroku
if (process.env.ENVIRONMENT === 'production'){
    database = 'robogarden_app';
    username = 'root';
    password = 'fdsdfsdfsdfds';
} 


const config = new Sequelize(database, username, password, {dialect: 'mariadb'});

module.exports = config;