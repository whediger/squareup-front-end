import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NavBarComponent } from './app.NavBarComponent';
import { AppData } from './app.data';

@NgModule({
       imports: [
         BrowserModule,
         FormsModule,
         HttpModule,
         JsonpModule
       ],
  declarations: [ NavBarComponent, AppData ],
     bootstrap: [ NavBarComponent, AppData ]
})

export class AppModule { }
