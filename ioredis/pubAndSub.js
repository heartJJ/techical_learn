const Redis = require('ioredis');
const sub = new Redis('6379');
const pub = new Redis('6379');

// 正常订阅
sub.subscribe('ac', 'abc', function (err, count) {
  if (err) console.error(err);

  console.log(`the number of channels we are currently subscribed to is ${count}`);
});

sub.on("message", function (channel, message) {
  console.log("Receive message %s from channel %s", message, channel);
});

pub.publish("ac", "msg ac");
pub.publish("abc", "mag abc");

