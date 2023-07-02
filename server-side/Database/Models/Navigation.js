const { DataTypes } = require('sequelize');

const sequelize = require('../Connector/Connector');
const Category = require('./Category');

const Navigation = sequelize.define('Navigation', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Type: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'Navigation',
    timestamps: true
});

// Navigation.belongsToMany(Category, {through: 'Navigation_Categories'});
// Category.belongsToMany(Navigation, {through: 'Navigation_Categories'});

module.exports = Navigation;