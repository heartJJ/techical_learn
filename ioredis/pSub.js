const Redis = require('ioredis');
const psub = new Redis('6379');
const pub = new Redis('6379');

// 模糊订阅
psub.psubscribe("a*c", function (err, count) {
  if (err) console.error(err);
  console.log(`the number of channels we are currently subscribed to is ${count}`);
});

psub.on("pmessage", function (pattern, channel, message) { 
  // console.log('pattern', pattern);
  console.log("pmessage %s from channel %s", message, channel);
});

pub.publish("ac", "msg 1");
pub.publish("abc", "msg 2");