import { App, Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Application } from 'egg';

@Provide()
@Controller('/')
export class HomeController {
  @App()
  app: Application;

  // @Inject()
  // httpclient; // 已在 configuration 中注入

  @Inject()
  redisService: any;

  @Get('/')
  async home() {
    console.log('urllib', this.app.httpclient);
    return 'Hello Midwayjs!';
  }

  @Get('/update')
  async update() {
    const res = await this.redisService.setValue('foo', 'hello world');
    return res;
  }
}
