import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashBoardComponent } from './dashboard.component';
import {HeroService} from "./hero.service";
//导入自己写好的组件

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([//让路由器可用
      {
        path: 'heroes',//匹配浏览器地址栏中的地址
        component: HeroesComponent//导航到此路由时，需要创建的组件
      },
      {
        path: 'dashboard',//配置仪表盘路由
        component: DashBoardComponent
      },
      {
        path: 'detail/:id',//带参数的路由,id是一个占位符
        component: HeroDetailComponent//英雄详情的路由配置
      },
      {                   //浏览器重定向到仪表盘
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [ //包含了所有由我们创建的并属于应用模块的组件、管道和指令。
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashBoardComponent
  ],
  providers: [//供每个视图使用
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

