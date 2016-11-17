import { Component, OnInit } from '@angular/core';
import { Sales } from './salesData';

@Component({
     moduleId: module.id,
     selector: 'data',
    styleUrls: ['css/data.css'],
     template:`
  <div id='dataTitle'>
    <h1>catagory sales data <span class='dateSpan'>~ from: </span><input value={{startDate}} id='startDate' class="dateInput" type="date"><span class='dateSpan'> to: </span><input value={{endDate}} id='endDate' class="dateInput" type="date"> <input id='submitButton' type='submit'></h1>
  </div>
  <div id="data">
    <h2>total sales: $ {{sales.totalSales}}</h2>
    <h2>$ {{catagory}} chai: $ {{sales.catagories.chai.totalSales}}</h2>
    <h2> Date in: {{dateIn}}</h2>
    <h2> Start Date: {{startDate}}</h2>
    <h2> End Date: {{endDate}}</h2>
  </div>
`
})


export class AppData implements OnInit {
  errorMessage: string;
  mode = 'Observable';
  catagory = '27.37';
  sales = SALES;


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
