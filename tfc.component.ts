import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tfc',
  templateUrl: './tfc.component.html',
  styleUrls: ['./tfc.component.css']
})
export class TfcComponent {
  username = "";
  password = "";
  val = 0;
  len=0;
  submit(a:any){
    console.log(a);
    if(a.value.un=="" || a.value.pw=="" || a.value.pw=="" || a.value.nm=="" || a.value.em=="" || a.value.cpw=="")
    {
      alert("Please fill the required fields");
    }
    else{
      alert("Validation Successful");
    }
  }


}
