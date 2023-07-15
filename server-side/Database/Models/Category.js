const { DataTypes } = require('sequelize');

const sequelize = require('../Connector/Connector');

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

Category.associate = function(models) {
    Category.belongsToMany(models.Navigation, {foreignKey:'CategoryId',through: "navigation_categories",as:'category'});
}

module.exports = Category;