//为 Angular 编译器设置整个应用的关键配置
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

//模拟Web API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//导入自己写好的组件
import { AppComponent } from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroService } from "./hero.service";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule, //注册Http服务
    InMemoryWebApiModule.forRoot(InMemoryDataService)//InMemoryWebApiModule将Http客户端默认的后端服务 — 这是一个辅助服务，负责与远程服务器对话 — 替换成了内存 Web API服务：
  ],
  declarations: [ //包含了所有由我们创建的并属于应用模块的组件、管道和指令。声明关联模块的任务。
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashBoardComponent
  ],
  providers: [//供每个视图使用，守卫服务
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

