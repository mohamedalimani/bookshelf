import { Injectable } from '@angular/core';
import { Observable } from 'rxjs' ;
import {HttpClient, HttpHeaders} from '@angular/common/http' ; 

@Injectable({
  providedIn: 'root'
})
export class ServeBookShelfService {

backendUrl = 'http://localhost:3000/api' ;
headers = new HttpHeaders().set('Content-Type','application/json') ;
  constructor(private http:HttpClient) { }

  //get all books
  getBooks(){
    return this.http.get(this.backendUrl) ;
  }

}
