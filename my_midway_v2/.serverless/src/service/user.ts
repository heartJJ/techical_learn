import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';

@Provide('userService') // 默认取 类名的驼峰字符串 作为 key
export class UserService {
  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
