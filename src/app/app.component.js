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
/**
 * Created by zhusujuan on 2017/2/20.
 */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes'; //变量赋值初始化组件
        this.author = 'zhusujuan';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<!--\u5185\u8054\u6A21\u677F-->\n    <h1>{{ title }}</h1>\n    <nav>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">DashBoard</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a><!--\u8DEF\u7531\u5668\u94FE\u63A5-->\n      <a routerLink=\"/clickMe\" routerLinkActive=\"active\">ClickMe</a>\n    </nav>\n    <router-outlet></router-outlet><!--\u8DEF\u7531\u63D2\u5EA7\u2014\u2014\u628A\u6FC0\u6D3B\u7684\u7EC4\u4EF6\u663E\u793A\u5728\u6B64-->\n    <h5>author: {{ author }}</h5>\n  ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map