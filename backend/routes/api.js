mongoose = require('mongoose') ;
bookModel = require('../models/bookModel') ;
const express = require('express') ;
const BookModel = require('../models/bookModel');
const booksRoute = express.Router() ;

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

module.exports = booksRoute ; 