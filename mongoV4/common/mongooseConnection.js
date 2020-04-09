const mongoose = require('mongoose');
  
mongoose.connect('mongodb://expressWR:123456@localhost:27017/express', {useNewUrlParser: true});

mongoose.Promise = Promise; // use native promise(also bluebird, q)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connection success...');
});

mongoose.set('debug', true); // sql 打印

module.exports = mongoose;