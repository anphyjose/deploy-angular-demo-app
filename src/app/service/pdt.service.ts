import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PdtService {

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/products");
     pipe(map((res:any)=> {
      return res;
    }))
  }
}
