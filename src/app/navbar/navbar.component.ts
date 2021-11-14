import { ShareColorService } from './../share-color.service';
import {ServeBookShelfService} from '../service/serve-book-shelf.service' ; 
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  
  public navbarNewColor:boolean = true;
  public subscription: Subscription ;
  public oneBook ; 
  constructor(private colorService:ShareColorService, private serveBook:ServeBookShelfService) { }

  public ngOnDestroy(): void{
    this.subscription.unsubscribe() ;
  }


  public ngOnInit(): void {
     this.subscription = this.colorService.getColor().subscribe(color => this.navbarNewColor = color) ;
  }

  //GET ONE BOOK BY NAME
  searchBook(f){
   this.subscription = this.serveBook.getBook(f.searchedBook).subscribe(data => {this.oneBook = data;}) ;
  }
  
}
