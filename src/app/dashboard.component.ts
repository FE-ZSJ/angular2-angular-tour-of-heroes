/**
 * Created by Administrator on 2017/2/22.
 */
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

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {//通过生命周期钩子在组件生命周期的各个时间点插入自己操作
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

}
