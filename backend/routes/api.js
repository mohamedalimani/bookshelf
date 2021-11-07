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
booksRoute.route('/:name').get((req,res)=>{
    BookModel.findById(req.params.name,(error,data)=>{
        if (error){
            return next(error) ; 
        } else {
            res.json(data)
        }
    })
})

module.exports = booksRoute ; 