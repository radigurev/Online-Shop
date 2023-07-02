const { DataTypes } = require('sequelize');

const sequelize = require('../Connector/Connector');
const Navigation = require('./Navigation');

const Category = sequelize.define('Category', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Category',
    timestamps: true
});


module.exports = Category;