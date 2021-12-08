const Redis = require('ioredis');
const redis = new Redis('6379');

function SayHello(call, callback) {
  callback(null, {message: 'SayHello reply:' + call.request.message});
}

// 异步请求
const getMsg = async (call, callback) => {
  const id = call.request.id;
  await redis.set(`test${id}`, `reply with number: ${Math.random()}`);
  const name = await redis.get(`test${id}`);
  callback(null, { name });
};

module.exports = {
  SayHello,
  getMsg
};