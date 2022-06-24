import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private libraryService:LibraryService,private router:Router) { }
  title:String = "Update";
  bookItem = {
    bookName:'',
    literature:'',
    story:''
  }
  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.libraryService.getLib(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
    })
  }

  updateBook(){
    this.libraryService.updateBook(this.bookItem);
    alert('success');
    this.router.navigate(['/library']);
  }

}
