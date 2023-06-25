const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shop', 'root', 'password', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

  try {
    sequelize.authenticate();

   console.log("Connected");
}catch(error) {
   console.error("No connection",error);
}

module.exports = sequelize;