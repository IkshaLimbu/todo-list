const {DataTypes} = require('sequelize')
const sequelize = require('../config/db');

//making schema for table Todo
const Todo = sequelize.define('Todo', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
});

module.exports = Todo;

