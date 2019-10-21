'use strict';

const antpb = require('antpb');
const protocol = require('sofa-bolt-node');
const { RpcClient } = require('sofa-rpc-node').client;
const { ZookeeperRegistry } = require('sofa-rpc-node').registry;
const logger = console;

// 传入 *.proto 文件存放的目录，加载接口定义
const proto = antpb.loadAll('./proto');
// 将 proto 设置到协议中
protocol.setOptions({ proto });

const registry = new ZookeeperRegistry({
  logger,
  address: '127.0.0.1:2181',
});

async function invoke() {
  const client = new RpcClient({
    logger,
    protocol,
    registry,
  });
  const consumer = client.createConsumer({
    interfaceName: 'com.alipay.sofa.rpc.test.ProtoService',
  });
  await consumer.ready();

  const result = await consumer.invoke('echoObj', [{
    name: 'gxcsoccer',
    group: 'B',
  }], { responseTimeout: 3000 });
  console.log(result);
}

invoke().catch(console.error);