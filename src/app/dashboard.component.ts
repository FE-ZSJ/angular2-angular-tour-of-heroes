/**
 * Created by Administrator on 2017/2/22.
 */
//组件应保持精简，提供用户体验，为数据绑定提供属性和方法，将琐事委托给服务
//组件负责屏幕的一小块区域(视图)
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

//组件是一个带模板的指令；@Component装饰器实际上就是一个@Directive装饰器，只是扩展了一些面向模板的特性。
@Component({
  moduleId: module.id,//相对模板加载templateUrl
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',//指向新的模板文件
  styleUrls: [ 'dashboard.component.css' ]
})
//组件通过一些由属性和方法组成的API与视图交互
export class DashBoardComponent implements OnInit{//在类中定义组件的应用逻辑，为视图提供支持
  heroes: Hero[] = [] ;
  //【依赖注入】
  //注入器用于维护服务实例的容器，如果请求的服务容器中没有，injector会通过供应商创建一个服务实例添加到容器中。
  //当请求的服务都被返回，angular会以这些服务为参数去调用组件的构造函数
  constructor(private heroService: HeroService) {}//依赖注入——angular通过查看构造函数的参数类型判断需要哪些服务
  //angular创建组件时，会首先为组件所需的服务请求一个注入器(injector)
  ngOnInit(): void {//通过生命周期钩子在组件生命周期的各个时间点插入自己操作
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

}
