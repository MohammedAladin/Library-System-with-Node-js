const express = require("express");
const router = express.Router()
const bookController = require("../controller/bookController");

const bookValidator = require("../middlewares/bookValidatorMW")
const Book = require("../models/bookModel")

router.post("/add",bookValidator,bookController.addBook)

router.post("/delete",bookController.deleteBook)

router.get("/",async (req,res)=>{

  res.render("adminPage",{
    data: await Book.find()
  })    
})




module.exports = router