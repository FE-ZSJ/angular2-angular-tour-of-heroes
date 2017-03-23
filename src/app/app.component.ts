/**
 * Created by zhusujuan on 2017/2/20.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<!--内联模板-->
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">DashBoard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a><!--路由器链接-->
      <a routerLink="/clickMe" routerLinkActive="active">ClickMe</a>
      <a routerLink="/heroForm" routerLinkActive="active">heroForm</a>
    </nav>
    <router-outlet></router-outlet><!--路由插座——把激活的组件显示在此-->
    <h5>author: {{ author }}</h5>
  `,
  styleUrls:[ 'app/app.component.css' ]
})
export class AppComponent {
  title = 'Tour of Heroes';//变量赋值初始化组件

  author: string;//利用构造函数声明和初始化属性

  constructor() {
    this.author = 'zhusujuan';
  }
}
