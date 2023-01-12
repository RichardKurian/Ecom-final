import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  url:any='https://dummyjson.com/products';
  constructor(private http:HttpClient) { }

 


//   getProducts():Observable<any>{
//     return this.http.get(this.url);
 
//    }



   getProducts():Observable<any>{

    return of([
        {
            id: 1,
            location: 'Egypt',
          
          },
          {
            id: 2,
            location: 'Mexico',
            
          }, 
    ])
   
   }

//    getOne(id:any):Observable<any>{
//     return this.http.get('https://dummyjson.com/products/'+id);

 
//   }


  getOne(id:any):Observable<any>{
    // return this.http.get('https://dummyjson.com/products/'+id);

    // return this.http.get('https://dummyjson.com/products/'+id).map(res=>{

    // return res.json();
    // })

    return of([{
        id: 1,
        name: 'name1',
        title: 'title 1',
      
    }])
  }


  getUsers():Observable<any>{
    return this.http.get('/assets/users.json');
  }

}
