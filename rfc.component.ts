import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-rfc',
  templateUrl: './rfc.component.html',
  styleUrls: ['./rfc.component.css']
})
export class RfcComponent {
  constructor(){ }
  myform = new FormGroup(
    {
      nm:new FormControl(),
      em:new FormControl(),
      un:new FormControl(),
      pw:new FormControl(),
      ph:new FormControl()
    });
 onSubmit(){
  if(this.myform.value.nm!="" && this.myform.value.em!="" && this.myform.value.un!="" && this.myform.value.pw!="" && this.myform.value.ph!="" ){
 alert("Successful Signup");
  }else{
    alert("Please fill all the required fields");
  }   }
get name(){
  console.log(this.myform.value.nm);
    return this.myform.get("nm");
}
get mail(){
  console.log(this.myform.value.em);
    return this.myform.get("em");
}
  get user(){
    console.log(this.myform.value.un);
    return this.myform.get("un");
  }
  get pass(){
    console.log(this.myform.value.pw);
      return this.myform.get("pw");
  }
  get pno(){
    console.log(this.myform.value.ph);
      return this.myform.get("ph");
  }}
