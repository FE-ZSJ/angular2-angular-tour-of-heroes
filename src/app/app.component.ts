/**
 * Created by zhusujuan on 2017/2/20.
 */
import { Component } from '@angular/core';
import {Hero} from "./hero";
import {Hero1} from "./hero1";

@Component({
  selector: 'my-app',
  template: `<!--内联模板-->
    <h1>{{ title }}</h1>  
    <h2>my favorite hero is: {{ myhero }}</h2><!--插值表达式-->
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of testHeroes">{{ hero.detail }}</li>
    </ul>
    <p *ngIf="testHeroes.length > 3">There are many heroes!</p><!--将元素从DOM中添加或移除，而不是隐藏-->
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">DashBoard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a><!--路由器链接-->
    </nav>
    <router-outlet></router-outlet><!--路由插座——把激活的组件显示在此-->
    <h5>author: {{ author }}</h5>
  `,
  styleUrls:[ 'app/app.component.css' ]
})
export class AppComponent {
  title = 'Tour of Heroes';//变量赋值初始化组件

  myhero = 'huge';
  author: string;//利用构造函数声明和初始化属性
  // testHeroes = ['yangmi', 'huge', 'xiaochen', 'junkai'];//字符串数组
  testHeroes = [
    new Hero1(1234,'yangmi'),
    new Hero1(1245,'huge'),
    new Hero1(1346,'xiaochen'),
    new Hero1(1565,'junkai')
  ];


  constructor() {
    this.author = 'zhusujuan';
    this.myhero = this.testHeroes[0].detail;
  }
}
