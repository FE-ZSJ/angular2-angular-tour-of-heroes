/**
 * Created by zhusujuan on 2017/3/22.
 */
import { Component } from '@angular/core';
import {Hero1} from "./hero1";

@Component({
  selector: 'click-me',
  template: `
    <h2>my favorite hero is: {{ myhero }}</h2><!--插值表达式-->
     <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of testHeroes">{{ hero.detail }}</li>
    </ul>
    <p *ngIf="testHeroes.length > 3">There are many heroes!</p><!--将元素从DOM中添加或移除，而不是隐藏-->
    <button (click)="onClickMe()">click me!</button>
    {{ clickMessage }}`
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
