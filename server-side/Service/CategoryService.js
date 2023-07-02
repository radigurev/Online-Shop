const Category = require('../Database/Models/Category');

module.exports = {
    ReturnAllCategories: async function () {
    let categories = await Category.findAll({
      attributes: ["Id", "Name"],
    });

    return categories;
}
}