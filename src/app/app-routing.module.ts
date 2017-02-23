/**
 * Created by zhusujuan on 2017/2/23.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashBoardComponent } from './dashboard.component';

const routes: Routes = [//将路由抽出到一个变量中
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes',//匹配浏览器地址栏中的地址
    component: HeroesComponent//导航到此路由时，需要创建的组件
  },
  { path: 'dashboard',//配置仪表盘路由
    component: DashBoardComponent
  },
  { path: 'detail/:id',//带参数的路由,id是一个占位符
    component: HeroDetailComponent//英雄详情的路由配置
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]//这样关联模块的组件可以访问路由的声明
})

export class AppRoutingModule{}

