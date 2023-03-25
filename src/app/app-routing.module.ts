import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './pdt/product/product.component';
import { LoginComponent } from './signup/login/login.component';
import { SignComponent } from './signup/sign/sign.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'sign',component:SignComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
