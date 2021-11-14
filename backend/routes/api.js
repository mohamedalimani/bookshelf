mongoose = require('mongoose') ;
const express = require('express') ;
const BookModel = require('../models/bookModel');
const booksRoute = express.Router() ;

//show all books
booksRoute.route('/').get((req,res)=>{
    BookModel.find((error,data)=>{
        if (error){
            console.log("an error accured while retrieving data !") ; 
        }
        else{
            res.json(data) ;
        }
    })
}) ;

// get one book by name
booksRoute.route('/:name').get((req,res,next)=>{
    BookModel.find({name: req.params.name},(error,data)=>{
        if (error){
            return next(error) ; 
        } else {
            
            res.json(data) ;
        }
    })
})

//POST ONE BOOK
booksRoute.route('/post').post((req,res)=>{
    var post = {
        name   : req.params.name,
        genre  : req.params.genre,   
        author : req.params.author,
        rating : req.params.rating,
        price  : req.params.price
    }
    new BookModel(post).save() ;
    
})

module.exports = booksRoute ; 