import { Provide, Scope, ScopeEnum, Init } from '@midwayjs/decorator';
import * as Redis from 'ioredis';

@Provide()
@Scope(ScopeEnum.Singleton)
export class RedisService {
  redis: Redis.Redis = null;

  @Init()
  async init() {
    this.redis = new Redis({
      host: 'redis',
    });
  }

  async setValue(key, value) {
    return await this.redis.set(key, value);
  }

  async getValue(key) {
    return await this.redis.get(key);
  }
}
