//为 Angular 编译器设置整个应用的关键配置
import { NgModule }      from '@angular/core';//从库模块中导入NgModule装饰器
import { BrowserModule } from '@angular/platform-browser';//从angular库中导入angular模块
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
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from "./hero.service";

@NgModule({//装饰器负责把元数据装饰到类上，接收的是描述模块属性的元数据对象
  imports: [//本模块声明的组件模板需要的类所在的其他模块
    BrowserModule,//应用模块需要BrowserModule的某些素材
    FormsModule,
    AppRoutingModule,
    HttpModule, //注册Http服务
    InMemoryWebApiModule.forRoot(InMemoryDataService)//InMemoryWebApiModule将Http客户端默认的后端服务 — 这是一个辅助服务，负责与远程服务器对话 — 替换成了内存 Web API服务：
  ],
  //声明本模块中的视图类(组件、指令、管道)
  declarations: [ //包含了所有由我们创建的并属于应用模块的组件、管道和指令。声明关联模块的任务。
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashBoardComponent,
    HeroSearchComponent
  ],
  // exports:[ AppComponent ],//declarations的子集，可用于其他模块的组件模板,此处不需要
  //服务的创建者，加入全局服务列表中，可用于应用的任何部分
  providers: [//供每个视图使用，守卫服务
    HeroService
  ],
  //指定应用的主视图(根组件)，其他视图的宿主，只有根模块设置
  bootstrap: [ AppComponent ]
})
export class AppModule { }

