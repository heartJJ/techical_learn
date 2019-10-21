/**
 * 调用 RPC 服务（从注册中心获取服务列表）
 */
'use strict';

const { RpcClient } = require('sofa-rpc-node').client;
const { ZookeeperRegistry } = require('sofa-rpc-node').registry;
const logger = console;

// 1. 创建 zk 注册中心客户端
const registry = new ZookeeperRegistry({
  logger,
  address: '127.0.0.1:2181',
});

const invoke = async () => {
  // 2. 创建 RPC Client 实例
  const client1 = new RpcClient({
    logger,
    registry,
  });
  // 3. 创建服务的 consumer
  const consumer1 = client1.createConsumer({
    interfaceName: 'com.nodejs.test.TestService',
  });
  // 4. 等待 consumer ready（从注册中心订阅服务列表...）
  await consumer1.ready();

  // 5. 执行泛化调用
  const result = await consumer1.invoke('plus', [ 1, 2 ], { responseTimeout: 3000 });
  console.log('1 + 2 = ' + result);
}

/**
 *直连模式，直接指定服务地址
 */
const directInvoke = async () => {
  // 不需要传入 registry 实例了
  const client2 = new RpcClient({
    logger,
  });
  const consumer2 = client2.createConsumer({
    interfaceName: 'com.nodejs.test.TestService',
    serverHost: '127.0.0.1:12200', // 直接指定服务地址
  });
  await consumer2.ready();

  const result = await consumer2.invoke('plus', [ 3, 4 ], { responseTimeout: 3000 });
  console.log('3 + 4 = ' + result);
}


const main = async () => {
  try {
    logger.log('第一种方式调用');
    await invoke();

    logger.log('第二种方式调用');
    await directInvoke();

  } catch (error) {
    logger.error(error);
  }
}

main();