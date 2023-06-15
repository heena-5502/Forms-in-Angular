import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SfcComponent } from './sfc/sfc.component';
import { TfcComponent } from './tfc/tfc.component';
import { RfcComponent } from './rfc/rfc.component';

const routes: Routes = [
  {
    path:"sfc",
    component:SfcComponent
  },
  {
    path:"tfc",
    component:TfcComponent
  },
  {
    path:"rfc",
    component:RfcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
