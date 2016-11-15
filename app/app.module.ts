import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NavBarComponent } from './app.NavBarComponent';
import { DataComponent } from './app.data';

@NgModule({
       imports: [
         BrowserModule,
         FormsModule
       ],
  declarations: [ NavBarComponent ],
     bootstrap: [ NavBarComponent ]
})

export class AppModule { }
