import { ShareColorService } from './../share-color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  status:boolean = true ;
  color:boolean ;

  constructor(private colorService:ShareColorService) { }
  
  changeTheme(){
    this.status = !this.status ;
    this.colorService.updateColor(this.status) ; 
    console.log(this.status) ;
  } ;


  ngOnInit(): void {
  }

}
