const express = require('express');

const CategoryService = require('../Service/CategoryService');

const route = express.Router();



route.post('/insertNavigation', (req,res) => {
    res.json(req.body);
});

route.get('/getCategory', async (req,res) => {
    let categories = await CategoryService.ReturnAllCategories();
    
    res.json(JSON.stringify(categories));
});

module.exports = route;