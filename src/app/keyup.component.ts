
/**
 * Created by zhusujuan on 2017/3/22.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
    <p>通过$event对象取得用户输入：</p>
    <input (keyup)="onkey($event)"><!--将整个事件载荷 ($event) 传递给组件的事件处理器-->
    <p>{{ value }}</p>
  `,
})
export class KeyUpComponent_v1{
  value = '';
  // 没有任何类型信息能够揭示事件对象的属性，防止简单的错误。
  // onkey(event: any) {//$event对象的属性取决于DOM事件的类型
  //   this.value += event.target.value + '|';
  //   // this.value += event.key + '|';//积累各个按键本身
  // }

  //反对把整个DOM事件传到方法中
  onkey(event: KeyboardEvent) {//不是所有的元素都有value属性，所以它将target转换为输入元素
    this.value += (<HTMLInputElement>event.target).value + '|';
    //违反了模板和组件之间分离关注的原则
  }
}
