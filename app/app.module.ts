import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonModule } from '@angular/http';

import { NavBarComponent } from './app.NavBarComponent';
import { DataComponent } from './app.data';

@NgModule({
       imports: [
         BrowserModule,
         FormsModule,
         HttpModule,
         JsonModule
       ],
  declarations: [ NavBarComponent, DataComponent ],
     bootstrap: [ NavBarComponent, DataComponent ]
})

export class AppModule { }
