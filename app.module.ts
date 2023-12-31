import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SfcComponent } from './sfc/sfc.component';
import { TfcComponent } from './tfc/tfc.component';
import { RfcComponent } from './rfc/rfc.component';
@NgModule({
  declarations: [
    AppComponent,
    SfcComponent,
    TfcComponent,
    RfcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
