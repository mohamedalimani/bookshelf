const express = require("express") ; 
const mongoose = require("mongoose") ;
cors = require('cors') ;
const path = require('path') ;
bodyParser = require('body-parser') ;
const app = express() ; 
const port = 3000 ;
const booksRoute = require('./routes/api') ;

// enable cross-origin sharing and ...
app.use('/api',booksRoute) ;
app.use(cors()) ; 
app.use(express.static(path.join(__dirname,'dist/smart-bookshelf'))) ;
app.use('/',express.static(path.join(__dirname,'dist/smart-bookshelf'))) ; 
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({
  extended:false 
})) ;

mongoose.connect('mongodb://localhost:27017/books',{useNewUrlParser: true}).then(()=>{console.log('Database successfully connected')},
error => {
  console.log('Database could not connect:' + error) 
}) ;

const server = app.listen(3000,()=>{console.log("server is working correctly on port : "+port)}) ;

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});