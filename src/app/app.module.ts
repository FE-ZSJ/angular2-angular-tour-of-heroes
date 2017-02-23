//为 Angular 编译器设置整个应用的关键配置
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroService } from "./hero.service";
//导入自己写好的组件
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule
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

