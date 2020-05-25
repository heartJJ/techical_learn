const Redis = require('ioredis');
const redis = new Redis('6379');

// get && set
const getSet = async () => {
  await redis.set('test1', 'aaa');
  const test1 = await redis.get('test1');
  console.log(test1);

  await redis.hset('order:1', { id: 90001, time: '2019-01-01' });
  await redis.hincrby('order:1', 'id', 5)
  const test2 = await redis.hgetall('order:1');
  console.log(test2);
};

getSet();
