import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { PdtService } from 'src/app/service/pdt.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productList:any;
public filterCategory:any;
searchKey:string="";
  constructor(private pdt:PdtService,private cartser:CartService) { }

  ngOnInit(): void {
    this.pdt.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.filterCategory =res;

     this.productList.forEach((a:any ) => {
       if(a.category ==="women's clothing"|| a.category ==="men's clothing"){
         a.category="fashion"
       }
       Object.assign(a,{quantity:1,total:a.price});
     });
     console.log(this.productList)
    });
    this.cartser.search.subscribe((val:any)=>{
      this.searchKey =val;
    })
  }
addtocart(item:any){
this.cartser.addtoCart(item);
}
filter(category:string){
this.filterCategory =this.productList
.filter((a:any)=>{
  if (a.category ==category ||category==''){
    return a;
    
  }
})
}
}
