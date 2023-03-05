const validatorMW = require('../middlewares/userValidatorMW');
const express = require('express');
const router = express.Router();

const User = require('../models/userModel');

const book  = require('../bookRoutes/books');

router.post('/', validatorMW, async (req, res) => {
    let loggedUser = await User.findOne({ email: req.body.email });
   
    if (!loggedUser.isAdmin) {
        res.redirect("/client")
        
    }
    else {
        res.redirect("/admin")
    }

})
router.get('/', async (req, res) => {
    res.render('login');
});

module.exports = router;