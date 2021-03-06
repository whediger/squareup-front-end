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
var NavBarComponent = (function () {
    function NavBarComponent() {
        this.title = 'Catagory Sales';
    }
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            styleUrls: ['app/css/navbar.css'],
            template: "\n  <div id=\"navBar\">\n    <h1>{{title}}</h1>\n    <ul>\n      <li>Dates ~</li>\n      <li>from:</li>\n      <li><input class=\"dateInput\" type=\"date\"></li>\n      <li>to:</li>\n      <li><input class=\"dateInput\" type=\"date\"></li>\n    </ul>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=app.NavBarComponent.js.map