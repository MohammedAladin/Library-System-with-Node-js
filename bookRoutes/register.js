const validatorMW = require('../middlewares/userValidatorMW');
const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');
const newUserValidatorMW = require('../middlewares/newUserValidatorMW');

router.get('/', async (req, res) => {
  res.render('register');
});
router.post('/', newUserValidatorMW, async (req, res) => {
  res.render('login');
});


module.exports = router;