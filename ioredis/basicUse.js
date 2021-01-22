const Redis = require('ioredis');
const redis = new Redis('6379');

// 通过lua脚本注册自定义命令
const del_lua = 'if redis.call("get",KEYS[1]) == ARGV[1] then return redis.call("del",KEYS[1]) else return 0 end ';
redis.defineCommand('del_key', {
  lua: del_lua, numberOfKeys: 1
});


// get && set
const getSet = async () => {
  // await redis.set('test1', 'aaa');
  // const test1 = await redis.get('test1');
  // console.log(test1);

  // await redis.hset('order:1', {
  //   id: 90001, time: '2019-01-01', obj: { a: 'abc' } });
  // // await redis.hincrby('order:1', 'id', 5)
  // const test2 = await redis.hgetall('order:1');
  // console.log(test2);


  // await redis.sadd('recycleCheck', 900001);
  // const flag = await redis.sismember('recycleCheck', 900002)
  // console.log(flag)

  // const commands = redis.getBuiltinCommands();

  const res1 = await redis.set('recycleCheck90001', '1', 'NX', 'PX', 5000);
  console.log(res1);

  // const res2 = await redis.setnx('recycleCheck90001', '1');
  // console.log(res2);
  // await redis.expire('recycleCheck90001', '5');
  console.log(await redis.get('recycleCheck90001'));

  console.log(await redis.del_key('recycleCheck90001', '1'));

  console.log(await redis.get('recycleCheck90001'));
};

getSet();
