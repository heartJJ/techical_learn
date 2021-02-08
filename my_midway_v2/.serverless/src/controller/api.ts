import { Inject, Controller, Get, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
// import { UserService } from '../service/user';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject('userService')
  userService: any;

  @Get('/get_user')
  async getUser(@Query() uid: number, @Query('s') show) {
    // 此处类型定义只是TS的语法提示，不会对运行时产生影响。校验依赖校验器
    console.log('uid', typeof uid);
    console.log('show', typeof show);
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }
}
