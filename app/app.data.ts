import { Component, OnInit } from '@angular/core';
import { Sales } from './salesData';
import { DataService } from './data.service';

export class Data {
  amount: number;
}

@Component({
     moduleId: module.id,
     selector: 'data',
    styleUrls: ['css/data.css'],
    providers: [ DataService ],
     template:`
  <div id="data">
    <h1>YaY we mAde mOney $ {{catagory}}</h1>
  </div>
`
})

export class DataComponent implements OnInit {
  errorMessage: string;
  sales: Sales[];
  mode = 'Observable';
  catagory = '27.37';

  constructor(private dataService: DataService) {}

  ngOnInit(){ this.getSales(); }

  getSales(){

  }
}
