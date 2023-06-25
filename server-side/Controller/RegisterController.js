const express = require('express');

const route = express.Router();

route.get('/',(req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json( {message: 'register page'} )
});
module.exports = route;