import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { ServeBookShelfService } from './../service/serve-book-shelf.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private apiService:ServeBookShelfService) { }

  ngOnInit(): void {
  }
  onSubmit(f){
    console.log(f.name.value)
    this.apiService.editBook(f.name.value,f.value).subscribe( res => {console.log('backend\' response:',res)}) ; 
  }
}
