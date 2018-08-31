//declaration
const express = require('express');
const bodyParser = require('body-parser');
const request = require('ajax-request');
const port = process.env.PORT || 3000;
var app = express();

//controller
const userController = require('./controllers/userController');

//configure
app.set('view engine', 'ejs');

//middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use('/css', express.static(__dirname + '/css'));


//routes
app.use('/', userController);


//server start
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
