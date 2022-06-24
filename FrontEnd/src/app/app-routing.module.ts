import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AddbookComponent } from './addbook/addbook.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { LibraryComponent } from './library/library.component';
import { SignupComponent } from './signup/signup.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'library',component:LibraryComponent},
  {path:'books',component:BooksComponent},
  {path:'signup',component:SignupComponent},
  {path:'update',component:UpdateComponent},
  {path:'login',component:LoginComponent},
  {path:'add',canActivate:[AuthGuard], component:AddbookComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
