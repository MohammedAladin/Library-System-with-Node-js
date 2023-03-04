const mongoose = require('mongoose');

const schema = new mongoose.Schema ({

    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    bookPrice:{
        type:String,
        required:true
    },
    bookPages:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:0
    },
    isAvaliable:{
        type:Boolean,
        
    },

})
var book;

if (mongoose.models.book) {
    book = mongoose.model('book');
} else {
    book = mongoose.model('book', schema);
}

module.exports = book;