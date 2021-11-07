import { ShareColorService } from './../share-color.service';
import { Component, OnInit } from '@angular/core';
import {ServeBookShelfService} from 'src/app/service/serve-book-shelf.service' ;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  status:boolean = true ;
  color:boolean ;
  books:any = [] ; 

  constructor(private colorService:ShareColorService,private apiService:ServeBookShelfService) {
    this.showBooks() ;
   }
  
  changeTheme(){
    this.status = !this.status ;
    this.colorService.updateColor(this.status) ; 
  } ;

  //get All books
  showBooks(){
   this.apiService.getBooks().subscribe((data) => {
     this.books = data ;
   }) ;
  }
  getBook(){
    this.apiService.getBook(name).subscribe((data=>{
      this.books = data ; 
    }))
  }

  ngOnInit(): void {
  }

}
