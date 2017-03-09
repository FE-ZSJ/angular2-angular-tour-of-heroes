/**
 * Created by Administrator on 2017/2/22.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,//相对模板加载templateUrl
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',//指向新的模板文件
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashBoardComponent implements OnInit{
  heroes: Hero[] = [] ;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }

}
