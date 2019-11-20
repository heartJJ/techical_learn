const knex = require('knex')({
  client: 'pg', //指明数据库类型，还可以是mysql，sqlite3等等
  connection: { //指明连接参数
    host: '127.0.0.1',
    user: 'postgres',
    password: '123456',
    database: 'myDb'
  },
  debug: true, //指明是否开启debug模式，默认为true表示开启
  // pool: { //指明数据库连接池的大小，默认为{min: 2, max: 10}
  //   min: 0,
  //   max: 7,
  // },
  acquireConnectionTimeout: 10000, //指明连接计时器大小，默认为60000ms
  // migrations: {
  //   tableName: 'migrations' //数据库迁移，可选
  // }
})

module.exports = knex;