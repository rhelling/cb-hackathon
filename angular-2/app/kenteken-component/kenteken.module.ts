import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { KentekenComponent }  from './kenteken.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ KentekenComponent ],
  bootstrap: [ KentekenComponent ]
})

export class KentekenModule { }
