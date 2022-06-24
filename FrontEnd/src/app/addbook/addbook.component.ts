import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { LibraryModel } from '../library/library.model';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  title:String="Add";
  bookItem = new LibraryModel("","","");
  constructor(public libraryService:LibraryService, public router:Router) { }

  ngOnInit(): void {
  }
  
  newBook(){
    this.libraryService.addBook(this.bookItem);
    alert('New Book added');
    this.router.navigate(['library']);
  }

}
