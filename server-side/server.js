//SETTING SERVER
const express = require('express');
const cors = require('cors');
const PORT = 3961;

//CONTROLLERS
const RegisterController = require('./Controller/RegisterController');
const UserController = require('./Controller/UserController');
const AdminController = require('./Controller/AdminController');

//Database
const sequelize = require('./Database/Connector/Connector');
// const models = require('./Database/Models/*');
//Importing all models 

var glob = require( 'glob' )
  , path = require( 'path' );

glob.sync( './Database/Models/**/*.js' ).forEach( function( file ) {
  require( path.resolve( file ) );
});

const app = express();

const corsOptions ={
    origin: 'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    corsOptions: true
 }

 app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Mapping Controllers
app.use('/authenticate',RegisterController);
app.use('/users',UserController);
app.use('/admin',AdminController);

app.use(cors(corsOptions));
app.use(express.json());

sequelize.sync();

sequelize.sync({ alter: true });

app.listen(PORT, () => {
    console.log("Server-side is running on port :",PORT);
})