import { Component, OnInit } from '@angular/core';// ngOnInit 生命周期钩子
import { Router } from '@angular/router';

import {Hero} from "./hero";//导入用到的Hero类
import { HeroService } from "./hero.service";

//用装饰器将元数据附加到类上
@Component({ //装饰器将紧随其后的类标记为组件类
  //元数据告诉angular获取组件的构建块
  moduleId: module.id,//为与模块相关的URL提供基地址
  selector: 'my-heroes',//css选择器，告诉angular在父级HTML中查找<my-heroes>标签，创建并插入该组件
  templateUrl: 'heroes.component.html',//组件HTML模板的模块相对地址
  styleUrls: [ 'heroes.component.css' ]
  //provider是组件需要的依赖注入提供商数组，该组件的构造函数需要从服务中获取数据
})
//模板、元数据、组件共同描绘出视图
export class HeroesComponent implements OnInit{//组件
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private Router: Router,
    private heroService: HeroService) {//构造函数——私有属性标记为注入HeroService的靶点

  }//简单的初始化

  getHeroes(): void {//包装成专门的方法
    // this.heroes = this.heroService.getHeroes(); //调用此服务并获得数据
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes); //基于Promise，解决时获取数据
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); //模拟慢速连接
  }

  ngOnInit(): void {//用来介入组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时
    this.getHeroes();
  }

  onSelect(hero: Hero): void {//点击事件
    this.selectedHero = hero;
  }

  gotoDetail(): void {//链接参数数组 — 路径和路由参数 — 传递到router.navigate
    this.Router.navigate(['./detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if(!name){ return; }
    this.heroService.create(name)//新建一个英雄并放入英雄列表
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h!==hero);//从数组中移除被删除的英雄
        if(this.selectedHero === hero){ this.selectedHero = null; }//如果当前选中的英雄正好是删除的英雄，则当前选中的英雄为null
      })
  }
}
