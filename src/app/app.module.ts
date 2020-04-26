import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import {UserService} from './user.service';
import {AuthInterceptor} from './authInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    MyBooksComponent,
    BooksComponent,
    BookDetailsComponent,
    CategoryBooksComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
