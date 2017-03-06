/**
 * Created by zhusujuan on 2017/2/17.
 */
import { Injectable } from '@angular/core';//用于依赖注入
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';//利用toPromise操作符把Observable直接转换成Promise对象

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
// import {Response} from "@angular/http";

@Injectable()
export class HeroService {//该服务可以从任何地方获取数据，随时改变数据访问的方式，无需修改组件
  private heroesUrl = 'app/heroes';// URL to web api
  private headers = new Headers({'content-type': 'application/json'});//请求头的身体内容的类型

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])//在 then 回调中提取出数据
      .catch(this.handleError);//catch了服务器的失败信息，并把它们传给了错误处理器
  }
  // getHeroes(): Promise<Hero[]> {//返回模拟的数据,立即解决的Promise的方式
  //   return Promise.resolve(HEROES);
  // } //stub——桩方法

  private handleError(error: any): Promise<any> {
    console.error('An error occurred',error);// for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {//模拟慢速连接——承诺会在提供模拟数据之前等待两秒钟
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }

  // getHero(id: number): Promise<Hero[]> {//用来通过id从getHeros过滤英雄列表：
  //   return this.getHeroes()
  //              .then(heroes => heroes.find(hero => hero.id === id));
  // }

  getHero(id: number): Promise<Hero> {//从服务器获取数据
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero[])//在 then 回调中提取出数据
      .catch(this.handleError);//catch了服务器的失败信息，并把它们传给了错误处理器
  }

  update(hero: Hero): Promise<Hero> {//保存到服务器
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError());
  }
}


