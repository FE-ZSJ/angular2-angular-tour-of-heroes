import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);//通过引导根模块来启动应用

//动态(JiT)编译创建浏览器平台,并引导AppModule
