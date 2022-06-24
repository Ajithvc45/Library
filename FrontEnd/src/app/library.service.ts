import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  // url = 'http://localhost:3000/library';
  constructor(public http: HttpClient) { }

  getLibrary(){
    console.log("Donee")
    return this.http.get('http://localhost:3000/library');
  }

  addBook(item:any){
    return this.http.post('http://localhost:3000/insert', { item })
    .subscribe((data)=>console.log(data));
  }

  deleteBook(id:any){
    return this.http.delete('http://localhost:3000/library/remove/'+id)
  }

  getLib(id:any){
    return this.http.get('http://localhost:3000/library/'+id)
  }

  updateBook(book:any){
    console.log('update');
    return this.http.put('http://localhost:3000/update/', book)
    .subscribe(data => {console.log(data)})
  }
}
