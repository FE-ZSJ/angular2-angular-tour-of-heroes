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
`
})

export class LoopbackComponent{
  value = '';

  onkey(value: string) {//组件从视图中获取了干净的数据值
    this.value += value + '|';
  }
}
