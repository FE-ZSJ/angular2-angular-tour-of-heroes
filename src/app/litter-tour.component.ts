/**
 * Created by zhusujuan on 2017/3/23.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'litter-tour',
  template: `
  <input #newHero
    (keyup.enter)="addHero(newHero.value)"
    (blur)="addHero(newHero.value); newHero.value='' "><!--添加到列表时清空输入框的值-->
  <button (click)="addHero(newHero.value)">Add</button>
  <ul><li *ngFor="let hero of heroes">{{ hero }}</li></ul>`
})

export class LitterTourComponent{
  heroes = ['yang', 'huge', 'xia', 'jun'];

  addHero(newHero: string) {
    if(newHero) {
      this.heroes.push(newHero);
    }
  }
}
