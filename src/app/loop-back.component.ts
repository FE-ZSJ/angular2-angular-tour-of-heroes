/**
 * Created by zhusujuan on 2017/3/22.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
  <p>从一个模板引用变量中获得用户输入:</p>
  <!--<input #box (keyup)="0">&lt;!&ndash;模板引用变量——引用input本身&ndash;&gt;-->
  <!--<p>{{ box.value }}</p>--><!--完全自包含-->
  <input #box (keyup)="onkey(box.value)">
  <p>{{ value }}</p>
  
  <p>按键事件过滤(通过key.enter)</p>
  <input #box1 (keyup.enter)="onEnter(box1.value)">
  <p>{{ value1 }}</p>
  
  <p>失去焦点事件：</p>
  <input #box2 (key.enter)="update(box2.value)" (blur)="update(box2.value)">
  <p>{{ value2 }}</p>
`
})

export class LoopbackComponent{
  value = '';
  value1 = '';
  value2 = '';

  onkey(value: string) {//组件从视图中获取了干净的数据值
    this.value += value + '|';
  }

  onEnter(value: string) {
    this.value1 = value;
  }

  update(value: string) {
    this.value2 = value;
  }
}
