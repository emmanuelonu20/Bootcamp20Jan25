const Sequelize = require('sequelize');
const db_config = require('./../db_config');

const Task = db_config.define('task', {
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
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    task_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    priority_level: {
        type: Sequelize.STRING,
        allowNull: false
    },
    progress_level: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false});

module.exports = Task;