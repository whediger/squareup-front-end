import { Component } from '@angular/core';


@Component({
    selector: 'navbar',
      styleUrls: ['app/css/navbar.css'],
    template:`
  <div id="navBar">
    <h1>{{title}}</h1>
    <ul>
      <li>Dates ~</li>
      <li>from:</li>
      <li><input class="dateInput" type="date"></li>
      <li>to:</li>
      <li><input class="dateInput" type="date"></li>
    </ul>
  </div>
`
})

export class NavBarComponent {
  title = 'Catagory Sales';
}
