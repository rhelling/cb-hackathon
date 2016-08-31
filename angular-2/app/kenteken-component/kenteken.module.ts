import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KentekenComponent }  from './kenteken.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ KentekenComponent ],
  bootstrap: [ KentekenComponent ]
})
export class KentekenModule { }
