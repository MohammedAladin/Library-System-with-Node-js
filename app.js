const express = require('express');
const app = express();

const login = require('./bookRoutes/login');
const register = require('./bookRoutes/register');

const admin = require('./bookRoutes/admin');
const client = require('./bookRoutes/client');


const bodyParser = require('body-parser');
app.use( bodyParser.json() );      
    app.use(bodyParser.urlencoded({    
         extended: true
}));

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.use('/login', login);
app.use('/reg', register);
app.use('/admin', admin);
app.use('/client', client);


const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Books",{

}).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})


