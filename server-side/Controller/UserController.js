const express = require('express');
const route = express.Router();

const User = require('../Database/Models/User');
const { where } = require('sequelize');

route.get('/',(req, res) => {
        res.json({message: 'user page'})
});

route.get('/insert',(req,res) => {

      let newUser = User.build({
        firstName: "Petar",
        lastName: "Dimitrov"
      });
      
      newUser.save();

      res.json(JSON.stringify(newUser));
});

route.get('/select/:Id', async  (req,res) => {
        
         let user = await User.findOne({
                where: {
                        Id: req.params.Id
                },
        });

        if(user === null) {
                res.json({message: 'null'})
        }else {
                res.send(JSON.stringify(user));
        }
});

route.get('/delete',async (req,res) => {
        
        User.destroy({
                where: {
                        Id: 2
                },
        });

        res.json({message: 'Изтрито'});
});

route.get('/update/:Id', async (req,res) => {
        //1 == true
        let result = await User.update({
                lastName: "Andreev"
        },
         {
          where: {
                Id: req.params.Id
          }
        });

        res.json({message: result});
});

module.exports = route;