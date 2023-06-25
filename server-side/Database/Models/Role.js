const { DataTypes } = require('sequelize');

const sequelize = require('../Connector/Connector')

const Role = sequelize.define('Role', {
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
    tableName: 'Role',
    timestamps: true
});

module.exports = Role;