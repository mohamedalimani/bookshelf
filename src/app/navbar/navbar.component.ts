import { ShareColorService } from './../share-color.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {map} from 'rxjs/operators';

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

//  public navbarClass$ = this.colorService.getColor().pipe(map(isLightMode => isLightMode ? 'bg-light':'bg-dark'));

  public ngOnInit(): void {
     this.subscription = this.colorService.getColor().subscribe(color => this.navbarNewColor = color) ;
  }
  
}
