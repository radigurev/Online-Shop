const express = require('express');

const CategoryService = require('../Service/CategoryService');
const NavigationService = require('../Service/NavigationService');

const route = express.Router();

const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();


route.post('/insertNavigation',jsonParser, (req,res) => {
    NavigationService.saveNavigation(req.body);
});

route.get('/getCategory', async (req,res) => {
    let categories = await CategoryService.ReturnAllCategories();
    
    res.json(JSON.stringify(categories));
});

//TODO: Filter parents by navigation button type
route.get('/getParentRowsForType/:Type', async (req,res) => {

});

module.exports = route;