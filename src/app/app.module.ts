import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';//导入自己写好的组件

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ //包含了所有由我们创建的并属于应用模块的组件、管道和指令。
    AppComponent,
    HeroDetailComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
