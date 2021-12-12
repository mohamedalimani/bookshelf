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

//get one book by name
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
booksRoute.route('/post').post((req,res,next)=>{
    BookModel(req.body).save((err,x)=>{
        if (err){console.log(err);}
        else res.send(x);
    }) ;
})

//EDIT ONE BOOK BY NAME
  booksRoute.route('/edit/:name').put((req,res,next)=>{
        BookModel.findOneAndUpdate(req.params.name,req.body,
            {new:true},
            (error,data)=>{
                if (error){
                    console.log(error); 
                    return next(error); 
                }else{
                    console.log(data)
                    res.json(data) ; 
                    console.log('data updated successfully');
                }
            })
  })
  
//DELETE ONE BOOK BY NAME
booksRoute.delete('/delete/:name', (req ,res) => {
    BookModel.findOneAndRemove({name:req.params.name}, (err, doc) => {
        if(!err) { res.send(doc); }
        else {console.log('Error in books Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = booksRoute ; 