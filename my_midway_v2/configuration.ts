// in global file
import * as urllib from 'urllib';
import { App, Configuration } from '@midwayjs/decorator';
import { Application } from 'egg';

@Configuration()
export class AutoConfiguration {
  @App()
  app: Application;

  async onReady() {
    // 注入一些全局对象
    this.app.getApplicationContext().registerObject('httpclient', urllib);
  }
}
