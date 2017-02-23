/**
 * Created by zhusujuan on 2017/2/16.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';//从ActivatedRoute服务的可观察对象params中取得id参数
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';//之后会与路由参数Observable一起使用

import { HeroService } from './hero.service';//通过HeroService服务获取具有这个指定id的英雄数据
import {Hero} from "./hero";

@Component({//创建元数据
  moduleId: module.id,
  selector: 'my-hero-detail',//选择器的名字用来标识组件的元素
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit{//导出类以便其他组件使用
  // @Input()    //用导入的@Input装饰器给hero属性添加注解，声明成输入属性
  hero: Hero[];   //Hero实体类型来自于hero.ts

  constructor(//注入服务到构造函数中，并保存为私有变量
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))//从ActivatedRoute的Params中提取id，并通过HeroService去获取相关的英雄数据。如果用户在 getHero 请求执行的过程中再次导航这个组件，switchMap 再次调用HeroService.getHero之前， 会取消之前的请求。
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {// 利用浏览器的历史堆栈，导航到上一步
      this.location.back();
  }
}
