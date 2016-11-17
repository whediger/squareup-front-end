import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
        selector: 'navbar',
       styleUrls: ['app/css/navbar.css'],
        template:`
  <div id="navBar">
    <h1>{{title}}</h1>
  </div>
`
})

export class NavBarComponent {
  title = 'Catagory Sales';

  dates:string = '11/14/2016';

}
