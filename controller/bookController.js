const Book = require("../Models/bookModel")

const adminGetAllBooks = async (req,res)=>{ //here we had to add async and await
    return res.render("adminPage", {
        data: await Book.find()
    })
}

const clientGetAllBooks = async (req,res)=>{ //here we had to add async and await
    return res.render("clientPage", {
        data: await Book.find()
    })
}

const addBook = async (req,res)=>{
    
    let book = await Book.findOneAndUpdate({name:req.body.name},{$inc:{quantity:1}})
    if(book){
        console.log("book already exists")
        res.render("adminPage", {
            data:await Book.find()
        })
    }
    else{
    book = new Book({
        name:req.body.name,
        author:req.body.author,
        bookPrice:req.body.bookPrice,
        bookPages:req.body.bookPages,
        isAvaliable:true,
        quantity:1
    })
    book.save()
    console.log("book added")
    res.render("adminPage", {
        data: await Book.find()
    })}
};
const getBookByName = async (req,res)=>{

    let book  = await Book.findOne({name:req.params.name})
    if(!book){
        console.log("book not found")
        return res.status(404).send("book not found")
    }
    console.log("book found")
    
    res.render("clientPage", {
        data: [book]
    })
}
const deleteBook = async (req,res)=>{
    try{
        let book = await Book.findOneAndUpdate({name:req.body.name},{$inc:{quantity:-1}})
        console.log(book)
        if(book.quantity<=1){
            await Book.findOneAndDelete({name:req.body.name},{$inc:{quantity:-1}})
        }
        return res.render("adminPage", {
            data: await Book.find()
        })
    }
    catch(err){
        console.log(err)
        res.status(500).send("Bad request")
    }
}
const buyBook = async (req,res)=>{
    try{
        let book = await Book.findOneAndUpdate({name:req.body.name},{$inc:{quantity:-1}})
        console.log(book)
        if(book.quantity<=1){
            await Book.findOneAndDelete({name:req.body.name},{$inc:{quantity:-1}})
        }
        return res.render("clientPage", {
            data: await Book.find()
        })
    }
    catch(err){
        console.log(err)
        res.status(500).send("Bad request")
    }
}



module.exports = {
    addBook,
    adminGetAllBooks,
    clientGetAllBooks,
    getBookByName,
    deleteBook,
    buyBook

}