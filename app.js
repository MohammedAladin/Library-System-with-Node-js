const express = require('express');
const app = express();

const login = require('./bookRoutes/login');
const register = require('./bookRoutes/register');
const book = require('./bookRoutes/books');

const bodyParser = require('body-parser');
app.use( bodyParser.json() );      
    app.use(bodyParser.urlencoded({    
         extended: true
}));

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
app.get('/', (req, res) => {
    res.render('tapletemp')
});
app.use('/login', login);
app.use('/reg', register);
app.use('/books', book);

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Books",{

}).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
})


