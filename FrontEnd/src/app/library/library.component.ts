import { LibraryService } from './../library.service';
import { LibraryModel } from './library.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  title:String = "List";
  library:LibraryModel[] | any;
  // selectedFile = null;
  // user={
  //   uname:'',
  //   password:''
  // }

  constructor(private libraryService:LibraryService, public Router:Router, public _auth:AuthService) { }

  ngOnInit(): void {
    this.libraryService.getLibrary().subscribe((data) => {
      this.library = JSON.parse(JSON.stringify(data));
    })
  }

  updateBook(i:any){
    localStorage.setItem("editBookId",i._id.toString());
    this.Router.navigate(['/update']);
  }

  deleteBook(id:any){
    this.libraryService.deleteBook(id)
    .subscribe(data => {
      this.library = this.library.filter(p => p !==id);
      this.Router.navigate(['/library']);
    })
  }

}
