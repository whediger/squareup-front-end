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
var data_service_1 = require('./data.service');
var Data = (function () {
    function Data() {
    }
    return Data;
}());
exports.Data = Data;
var DataComponent = (function () {
    function DataComponent(dataService) {
        this.dataService = dataService;
        this.mode = 'Observable';
        this.catagory = '27.37';
        this.sales = SALES;
    }
    DataComponent.prototype.ngOnInit = function () { this.getSales(); };
    DataComponent.prototype.getSales = function () {
    };
    DataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'data',
            styleUrls: ['css/data.css'],
            providers: [data_service_1.DataService],
            template: "\n  <div id=\"data\">\n    <h1>YaY we mAde mOney $ {{catagory}} chai: $ {{sales.catagories.chai.totalSales}}</h1>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], DataComponent);
    return DataComponent;
}());
exports.DataComponent = DataComponent;
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