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
    <h1>YaY we mAde mOney $ {{catagory}} chai: $ {{sales.catagories.chai.totalSales}}</h1>
  </div>
`
})

export class DataComponent implements OnInit {
  errorMessage: string;
  mode = 'Observable';
  catagory = '27.37';
  sales = SALES;

  constructor(private dataService: DataService) {}

  ngOnInit(){ this.getSales(); }

  getSales(){

  }
}


  // "_comment": "data based on actual results but modified to protect confidential information",

const SALES: Data = {
  "catagories": {
    "chai": {
      "totalSales": 6810,
      "items": 18
    },
    "Coffee Drinks": {
      "totalSales": 33701,
      "items": 119
    },
    "Hot Tea": {
      "totalSales": 8615,
      "items": 27
    },
    "Foods": {
      "totalSales": 11692,
      "items": 51
    },
    "Cakes and Pies": {
      "totalSales": 1335,
      "items": 3
    },
    "Retail": {
      "totalSales": 350,
      "items": 1
    },
    "uncatagorized": {
      "totalSales": 1300,
      "items": 3
    },
    "Retail Drinks": {
      "totalSales": 1030,
      "items": 5
    },
    "non-coffee": {
      "totalSales": 3810,
      "items": 24
    },
    "Iced Drinks": {
      "totalSales": 545,
      "items": 3
    },
    "Whole Bean Coffee": {
      "totalSales": 1500,
      "items": 1
    }
  },
  "catagoryTotal": 70688,
  "totalSales": 128998
}
