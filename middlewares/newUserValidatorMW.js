const validator = require('../util/newUserValidator');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    const valid = validator(req.body);
    if (!valid) {
        res.status(400).json(validator.errors);
    } else {
        console.log(req.body)
        if(req.body.password !== req.body.passwordCon){
            return res.status(400).send("passwords do not match")
        }
        const hashedPass =  await bcrypt.hash(req.body.password,10);
        console.log(hashedPass)
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass})
        user.save()
            
        next();
    }
}