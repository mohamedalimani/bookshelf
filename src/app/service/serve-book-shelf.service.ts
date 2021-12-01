import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs' ;
import {HttpClient, HttpHeaders} from '@angular/common/http' ; 

@Injectable({
  providedIn: 'root'
})
export class ServeBookShelfService {

private notifs = new Subject<Object>() ;

backendUrl = 'http://localhost:3000/api' ;
headers = new HttpHeaders().set('Content-Type','application/json') ;

  constructor(private http:HttpClient) { }

  //get all books
  getBooks(){
    return this.http.get(this.backendUrl) ;
  }
  //make request to backend to search for a book by it's name 
  getBook(name){
    return this.http.get(this.backendUrl+'/'+name) ; 
  }
  
  updateBook(name){
    return this.notifs.next(name) ;
  }
  getOneBook(){
    return this.notifs.asObservable() ;
  }
  //post book
  postBook(data){
    return this.http.post(this.backendUrl +'/post',data) ;
  }
  //edit one book by it's name
  editBook(name, data){
    return this.http.put(this.backendUrl +'/edit/'+name,data) ;
  }
  // delete one book by it's name
  deleteBook(name){
    console.log("u're gonna delete this book",name)
    return this.http.delete(this.backendUrl+'/delete/'+name) ; 
  }
  
}
