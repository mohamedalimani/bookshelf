import { ShareColorService } from './../share-color.service';
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
  constructor(private colorService:ShareColorService) { }

  public ngOnDestroy(): void{
    this.subscription.unsubscribe() ;
  }


  public ngOnInit(): void {
     this.subscription = this.colorService.getColor().subscribe(color => this.navbarNewColor = color) ;
  }
  
}
