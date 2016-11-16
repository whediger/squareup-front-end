import { Component, OnInit } from '@angular/core';
import { Sales } from './salesData';
import { DataService } from './data.service';

@Component({
     moduleId: module.id,
     selector: 'data',
    styleUrls: ['app/css/data.css'],
    providers: [ DataService ],
     template:`
  <div id="data">
    <h1>YaY we mAde mOney</h1>
  </div>
`
})

export class DataComponent implements OnInit {
  errorMessage: string;
  sales: Sales[];
  mode = 'Observable';

  constructor(private dataService: DataService) {}

  ngOnInit(){ this.getSales(); }

  getSales(){
    this.dataService.getSalesData()
                    .subscribe(
                      sales => this.sales = sales,
                      error => this.errorMessage = <any>error);
  }
}
