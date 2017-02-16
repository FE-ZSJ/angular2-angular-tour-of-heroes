/**
 * Created by zhusujuan on 2017/2/16.
 */
import { Component, Input } from '@angular/core';
import {Hero} from "./hero";

@Component({//创建元数据
  selector: 'my-hero-detail',//选择器的名字用来标识组件的元素
  template: `
    <div *ngIf="hero"> <!--ngIf-->
      <h1>{{ title }}</h1>
      <h2>{{ hero.name }} details!</h2>
      <div>
        <label>id: </label>{{ hero.id }}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)] = "hero.name" placeholder="name"> <!--双向绑定-->
      </div>
    </div>
  `
})
export class HeroDetailComponent{//导出类以便其他组件使用
  @Input()    //用导入的@Input装饰器给hero属性添加注解，声明成输入属性
  hero: Hero;   //Hero实体类型来自于hero.ts
}
