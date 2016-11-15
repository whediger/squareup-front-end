import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
      styleUrls: ['app/css/navbar.css'],
    template:`
  <div id="navBar">
    <h1>{{title}}</h1>
  </div>
`
})

export class NavBarComponent {
  title = 'Catagory Sales';
}
