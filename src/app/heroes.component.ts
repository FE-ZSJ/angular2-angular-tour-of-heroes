import { Component, OnInit } from '@angular/core';// ngOnInit 生命周期钩子

import {Hero} from "./hero";//导入用到的Hero类
import { HeroService } from "./hero.service";

@Component({ //装饰器
  selector: 'my-heroes',
  template: `        <!--模板-->
        <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)"> <!--ngFor,属性绑定,事件-->
        <span class="badge">{{ hero.id }}</span>{{ hero.name }}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail> <!--来自hero-detail组件——绑定——目标属性声明为输入属性-->
  `,
  styles: [` <!--样式-->
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class HeroesComponent implements OnInit{//组件
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {//构造函数——私有属性标记为注入HeroService的靶点

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
}
