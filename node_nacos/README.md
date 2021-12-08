#### 关于 nacos

* [nacos quick start](https://nacos.io/zh-cn/docs/quick-start.html)

#### nacos 作为配置中心

```bash
node configService.js
```

#### nacos 作为注册中心

* http 方式

```bash
cd withHttp

node server1.js

node server2.js

node client.js
```

* grpc 方式

```bash
cd withGrpc

node server.js

node client.js
```