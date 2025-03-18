const Sequelize = require('sequelize');
const db_config = require('./../db_config');

const Department = db_config.define('department', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false});

module.exports = Department;