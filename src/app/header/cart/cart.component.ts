import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products:any=[];
public grantTotal!:number;

  constructor(private cartservi:CartService) { }

  ngOnInit(): void {
    this.cartservi.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.grantTotal=this.cartservi.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartservi.removeCartItem(item);
  }
  emptyCart(){
    this.cartservi.removeAllCart();
  }
}
