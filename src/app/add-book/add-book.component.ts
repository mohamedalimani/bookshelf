import { ServeBookShelfService } from './../service/serve-book-shelf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private apiService:ServeBookShelfService) { }

  ngOnInit(): void {
  }
  
  onSubmit(f){
    this.apiService.postBook(f.value).subscribe( res => {console.log('back response:',res)}) ; 
  }
}
