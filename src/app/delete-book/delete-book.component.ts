import { ServeBookShelfService } from './../service/serve-book-shelf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private apiService:ServeBookShelfService) { }

  ngOnInit(): void {
  }
onSubmit(f){
  //console.log(f) ;
  this.apiService.deleteBook(f.value).subscribe(x => console.log(x)) ;
}
}
