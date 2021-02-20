import { Func, Inject, Provide } from '@midwayjs/decorator';
import { FaaSContext, FunctionHandler } from '@midwayjs/faas';

@Provide()
@Func('index.handler')  // 标注函数
export class IndexService implements FunctionHandler {

  @Inject()
  ctx: FaaSContext;   // 函数执行上下文

  async handler() {
    return 'hello world';
  }
}
