const express = require("express");
const router = express.Router()
const bookController = require("../controller/bookController");

const bookValidator = require("../middlewares/bookValidatorMW")

const Book = require("../models/bookModel")


router.post("/buy",bookController.buyBook)

router.get("/",async (req,res)=>{

  res.render("clientPage",{
    data: await Book.find()
  })    

  
})




module.exports = router