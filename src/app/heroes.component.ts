import { Component, OnInit } from '@angular/core';// ngOnInit 生命周期钩子
import { Router } from '@angular/router';

import {Hero} from "./hero";//导入用到的Hero类
import { HeroService } from "./hero.service";

@Component({ //装饰器
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

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
    this.heroService.getHeroes().then(heroes => this.heroes = heroes); //基于Promise，解决时获取数据
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
}
