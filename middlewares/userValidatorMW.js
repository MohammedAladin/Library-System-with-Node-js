const validator = require('../util/userValidator');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const http = require('http')
module.exports = async (req, res, next) => {
    const valid = validator(req.body);
    if (!valid) {
        res.status(400).json(validator.errors);
        return;
    }
    
    let userEmail = await User.findOne({email:req.body.email});
    if(!userEmail) return res.status(400).send("invalid email or password");

    let validPass = await bcrypt.compare(req.body.password,userEmail.password);
    if(!validPass) return res.status(400).send("invalid email or password");

    console.log(userEmail.isAdmin)
    next();
};


