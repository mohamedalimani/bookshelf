import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ServeBookShelfService} from './service/serve-book-shelf.service';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

const routes:Routes = [
  {path:'', component:BooksComponent},
  {path:'post',component:AddBookComponent},
  {path:'edit',component:EditBookComponent},
  {path:'delete',component:DeleteBookComponent},
  { path:'**',component:NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [ServeBookShelfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
