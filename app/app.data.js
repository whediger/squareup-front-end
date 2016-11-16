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
var DataComponent = (function () {
    function DataComponent(dataService) {
        this.dataService = dataService;
        this.mode = 'Observable';
    }
    DataComponent.prototype.ngOnInit = function () { this.getSales(); };
    DataComponent.prototype.getSales = function () {
        var _this = this;
        this.dataService.getSalesData()
            .subscribe(function (sales) { return _this.sales = sales; }, function (error) { return _this.errorMessage = error; });
    };
    DataComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'data',
            styleUrls: ['css/data.css'],
            providers: [data_service_1.DataService],
            template: "\n  <div id=\"data\">\n    <h1>YaY we mAde mOney</h1>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], DataComponent);
    return DataComponent;
}());
exports.DataComponent = DataComponent;
//# sourceMappingURL=app.data.js.map