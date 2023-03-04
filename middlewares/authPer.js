const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    //check user role (admin or user) 
    //انا مش عارف حاليا مين اليوزر اللي بيعمل ريكويست على اند بوينت معينة
    // لأن الريكويست مفيهوش معلومات عن اليوزر اللي بيعمل الريكويست فا مش هقدر اسيرشش جوا الداتا بيز
    // get user role from token that sent with request header

    const token = req.get('x-auth-token');
    console.log(req.headers);
    if (!token) return res.status(401).send('Access denied...');

    try {
        const decoded = jwt.verify(token, config.get('jwtsec'));
        
        if(!decoded.isAdmin){
             return res.status(403).send("Access denied.. you are not admin");
        }
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid token.');
    }

}