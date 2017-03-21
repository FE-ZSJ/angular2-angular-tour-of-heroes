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
var hero_1 = require("./hero");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes'; //变量赋值初始化组件
        this.myhero = 'huge';
        // testHeroes = ['yangmi', 'huge', 'xiaochen', 'junkai'];//字符串数组
        this.testHeroes = [
            new hero_1.Hero(1234, 'yangmi'),
            new hero_1.Hero(1245, 'huge'),
            new hero_1.Hero(1346, 'xiaochen'),
            new hero_1.Hero(1565, 'junkai')
        ];
        this.author = 'zhusujuan';
        this.myhero = this.testHeroes[0].detail;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<!--\u5185\u8054\u6A21\u677F-->\n    <h1>{{ title }}</h1>  \n    <h2>my favorite hero is: {{ myhero }}</h2><!--\u63D2\u503C\u8868\u8FBE\u5F0F-->\n    <p>Heroes:</p>\n    <ul>\n      <li *ngFor=\"let hero of testHeroes\">{{ hero.detail }}</li>\n    </ul>\n    <nav>\n      <a routerLink=\"/dashboard\" routerLinkActive=\"active\">DashBoard</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a><!--\u8DEF\u7531\u5668\u94FE\u63A5-->\n    </nav>\n    <router-outlet></router-outlet><!--\u8DEF\u7531\u63D2\u5EA7\u2014\u2014\u628A\u6FC0\u6D3B\u7684\u7EC4\u4EF6\u663E\u793A\u5728\u6B64-->\n    <h5>author: {{ author }}</h5>\n  ",
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map