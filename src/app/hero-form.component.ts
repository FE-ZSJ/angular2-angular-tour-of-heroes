/**
 * Created by zhusujuan on 2017/3/23.
 */
import { Component } from '@angular/core';

import { HeroForm } from './heroForm';

@Component({
  moduleId: module.id,
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent{
  powers = ['UI', 'Java', 'UE', 'PHP'];

  model = new HeroForm(18, 'huge', this.powers[0], 'test');

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }//返回模型的JSON格式
}
