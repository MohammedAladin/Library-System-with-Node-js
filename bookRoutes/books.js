const express = require("express");
const router = express.Router()
const bookController = require("../controller/bookController");

const bookValidator = require("../middlewares/bookValidatorMW")
const authPer = require("../middlewares/authPer");


router.post("/",bookValidator,bookController.addBook)

router.post("/delete",bookController.deleteBook)

router.post("/buy",bookController.buyBook)

router.get("/",bookController.getAllBooks)

router.get("/getBookByName/:name",bookController.getBookByName)





module.exports = router