/**
 * Created by zhusujuan on 2017/3/22.
 */
import { Component } from '@angular/core';
import {Hero1} from "./hero1";

@Component({
  moduleId: module.id,//使用模板文件时需要指定
  selector: 'click-me',
  templateUrl: 'click-me.component.html'
})

export class ClickMeComponent{
  clickMessage = '';
  myhero = 'huge';
  // testHeroes = ['yangmi', 'huge', 'xiaochen', 'junkai'];//字符串数组
  testHeroes = [
    new Hero1(1234,'yangmi'),
    new Hero1(1245,'huge'),
    new Hero1(1346,'xiaochen'),
    new Hero1(1565,'junkai')
  ];

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  constructor() {
    this.myhero = this.testHeroes[0].detail;
  }
}
