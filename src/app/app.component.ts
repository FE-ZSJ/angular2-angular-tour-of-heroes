/**
 * Created by zhusujuan on 2017/2/20.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">DashBoard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a><!--路由器链接-->
    </nav>
    <router-outlet></router-outlet><!--路由插座——把激活的组件显示在此-->
  `,
  styleUrls:[ 'app/app.component.css' ]

})
export class AppComponent {
  title = 'Tour of Heroes';
}
