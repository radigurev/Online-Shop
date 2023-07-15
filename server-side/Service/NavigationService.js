const sequelize = require('../Database/Connector/Connector');
const Category = require('../Database/Models/Category');
const Navigation = require('../Database/Models/Navigation');


module.exports = {
    saveNavigation: async function(newNavigation) {
        let result = Navigation.create({
            Name: newNavigation.name,
            Type: newNavigation.type,
            category: [{
                Name: "test"
            }]
        }, {
            include: [{
                model: Category,
                as: 'category',
                through: 'navigation_categories',
                foreignKey: 'CategoryId'
            }]
            
        });

        console.log(result);
    }
};