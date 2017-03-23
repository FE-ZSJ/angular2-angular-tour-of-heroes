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
//为 Angular 编译器设置整个应用的关键配置，imports数组中应该只有NgModule类。不要放置其它类型的类。
var core_1 = require('@angular/core'); //从库模块中导入NgModule装饰器
var platform_browser_1 = require('@angular/platform-browser'); //从angular库中导入angular模块
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
//模拟Web API
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
//导入自己写好的组件
var app_component_1 = require('./app.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_search_component_1 = require('./hero-search.component');
var hero_service_1 = require("./hero.service");
var click_me_component_1 = require("./click-me.component");
var keyup_component_1 = require("./keyup.component");
var loop_back_component_1 = require('./loop-back.component');
var litter_tour_component_1 = require("./litter-tour.component");
//标记为angular模块类(ngModule类)，接收元数据对象，告诉angular如何编译和启动应用
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService) //InMemoryWebApiModule将Http客户端默认的后端服务 — 这是一个辅助服务，负责与远程服务器对话 — 替换成了内存 Web API服务：
            ],
            //声明本模块中的视图类(组件、指令、管道)
            declarations: [
                app_component_1.AppComponent,
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent,
                dashboard_component_1.DashBoardComponent,
                hero_search_component_1.HeroSearchComponent,
                click_me_component_1.ClickMeComponent,
                keyup_component_1.KeyUpComponent_v1,
                loop_back_component_1.LoopbackComponent,
                litter_tour_component_1.LitterTourComponent
            ],
            // exports:[ AppComponent ],//declarations的子集，可用于其他模块的组件模板,此处不需要
            //服务的创建者，加入全局服务列表中，可用于应用的任何部分
            providers: [
                hero_service_1.HeroService
            ],
            //指定应用的主视图(根组件)，其他视图的宿主，只有根模块设置。angular创建它并插入index.html宿主页面
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map