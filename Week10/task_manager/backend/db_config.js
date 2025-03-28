const Sequelize = require('sequelize');

let database_name = 'robo_task_manager';
let username = 'root';
let password = '';
let port = 3306;

module.exports = new Sequelize(database_name, username, password, {dialect: 'mariadb', port: port});