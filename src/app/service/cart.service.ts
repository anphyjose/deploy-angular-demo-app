import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartitemList:any=[]
public productList= new BehaviorSubject<any>([]);
public search= new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }
  getProducts(){
   return this.productList.asObservable();

  }
  setProduct(product:any){
this.cartitemList.push(...product)
this.productList.next(product);

  }
  addtoCart(product:any){
    this.cartitemList.push(product);
    this.productList.next(this.cartitemList);
    this.getTotalPrice();
    console.log(this.cartitemList)

  }
  getTotalPrice():number{
    let grandTotal = 0;
    this.cartitemList.map((a:any)=>{
      grandTotal +=a.total;

    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartitemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartitemList.splice(index,1);

      }
    })
    this.productList.next(this.cartitemList);
  }
  removeAllCart(){
    this.cartitemList=[]
    this.productList.next(this.cartitemList);
    

  }
}
