"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppData = (function () {
    function AppData() {
        this.mode = 'Observable';
        this.catagory = '27.37';
        this.sales = SALES;
    }
    AppData.prototype.ngOnInit = function () { this.getSales(); };
    AppData.prototype.getSales = function () {
    };
    AppData = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'data',
            styleUrls: ['css/data.css'],
            template: "\n  <div id='dataTitle'>\n    <h1>catagory sales data <span class='dateSpan'>~ from: </span><input value={{startDate}} id='startDate' class=\"dateInput\" type=\"date\"><span class='dateSpan'> to: </span><input value={{endDate}} id='endDate' class=\"dateInput\" type=\"date\"> <input id='submitButton' type='submit'></h1>\n  </div>\n  <div id=\"data\">\n    <h2>total sales: $ {{sales.totalSales}}</h2>\n    <h2>$ {{catagory}} chai: $ {{sales.catagories.chai.totalSales}}</h2>\n    <h2> Date in: {{dateIn}}</h2>\n    <h2> Start Date: {{startDate}}</h2>\n    <h2> End Date: {{endDate}}</h2>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppData);
    return AppData;
}());
exports.AppData = AppData;
// "_comment": "data based on actual results but modified to protect confidential information",
var SALES = {
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
};
//# sourceMappingURL=app.data.js.map