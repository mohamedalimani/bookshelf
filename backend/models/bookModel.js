const mongoose = require('mongoose') ;

let books = new mongoose.Schema({
    name:{
        type:String
    },
    genre:{
        type:String
    },
    author:{
        type:String
    },
    rating:{
        type:Number
    },
    price:{
        type:Number
    }
},{
    collection: 'booklist' 
}) 

module.exports = mongoose.model('books',books) ; 

