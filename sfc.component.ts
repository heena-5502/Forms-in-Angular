import { Component } from '@angular/core';

@Component({
  selector: 'app-sfc',
  templateUrl: './sfc.component.html',
  styleUrls: ['./sfc.component.css']
})
export class SfcComponent {

  un = "";
  pw = ""

  validate(){
    if(this.un=="" || this.pw=="")
    {
      alert("Enter valid credentials");
    }
    else{
      alert("Logging in...."); 
    }
  }

}
