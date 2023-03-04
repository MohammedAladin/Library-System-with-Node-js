const validatorMW = require('../middlewares/userValidatorMW');
const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');
const User = require('../models/userModel');

router.post('/', validatorMW, async (req, res) => {
    let loggedUser = await User.findOne({email:req.body.email});
    
    if(!loggedUser.isAdmin){
    { return res.render("clientPage", {
        data: await Book.find()
    })}  
    }
    return res.render("adminPage",{ 
        data: await Book.find()}
    )

})
router.get('/', async (req, res) => {
    res.render('login');
});

module.exports = router;