const { DataTypes } = require('sequelize');
const sequelize = require('../Connector/Connector')

const User = sequelize.define('User', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull:false
    },
    //FK
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Role',
            key: 'Id'
        }
    }
}, {
    tableName: 'User',
    timestamps: true
});

module.exports = User;