import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignComponent } from './signup/sign/sign.component';
import { LoginComponent } from './signup/login/login.component';
import { HeadComponent } from './header/head/head.component';
import { CartComponent } from './header/cart/cart.component';
import { ProductComponent } from './pdt/product/product.component';
import {HttpClientModule}from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './share/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    LoginComponent,
    HeadComponent,
    CartComponent,
    ProductComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
