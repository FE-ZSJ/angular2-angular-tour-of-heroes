/**
 * Created by zhusujuan on 2017/2/17.
 */
import { Injectable } from '@angular/core';//用于依赖注入

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {//该服务可以从任何地方获取数据，随时改变数据访问的方式，无需修改组件
  getHeroes(): Promise<Hero[]> {//返回模拟的数据,立即解决的Promise的方式
    return Promise.resolve(HEROES);
  } //stub——桩方法

  getHeroesSlowly(): Promise<Hero[]> {//模拟慢速连接——承诺会在提供模拟数据之前等待两秒钟
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }
}

