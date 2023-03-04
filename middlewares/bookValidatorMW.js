const validator = require('../util/bookValidator');

module.exports = (req, res, next) => {
    const valid = validator(req.body);
    if (valid) {
    
        next();
    } else {
        
        res.status(400).send(validator.errors);
    }
}