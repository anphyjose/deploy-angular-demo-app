import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
public signupForm:FormGroup|any
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname:['',Validators.required],
      mobilenumber:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]

    })
  }
  signUp(){
return this.http.post("http://localhost:3000/signupUsers",this.signupForm.value)
.subscribe(res=>{
  alert("Signup Successfully");
  this.signupForm.reset();
this.router.navigate(['login']);


},
err=>{
  alert("something went wrong")
})  
}

}

