'use strict';

const NacosNamingClient = require('nacos').NacosNamingClient;
const logger = console;

let client;
const _connectNacos = async () => {
  if (client) {
    return client;
  }

  const newClient = new NacosNamingClient({
    logger,
    serverList: '127.0.0.1:8848', // replace to real nacos serverList
    namespace: 'public',
  });
  await newClient.ready();

  client = newClient;
  return client;
}

const getServer = async (serverName) => {
  const client = await _connectNacos();
  return new Promise((resolve, reject) => {
    client.subscribe(serverName, hosts => {
      return resolve(hosts);
    });
  })
}

const registryServer = async (serverName, ip, port) => {
  const client = await _connectNacos();
  await client.registerInstance(serverName, {
    ip, port,
  });
  console.log(`服务${serverName} 成功注册 nacos`);
  
}



module.exports = { registryServer, getServer };


 // registry instance
  // const serviceName = 'nodejs.test.domain';

  // await client.registerInstance(serviceName, {
  //   ip: '1.1.1.1',
  //   port: 8080,
  // });
  // await client.registerInstance(serviceName, {
  //   ip: '2.2.2.2',
  //   port: 8080,
  // });

  // deregister instance
  // await client.deregisterInstance(serviceName, {
  //   ip: '1.1.1.1',
  //   port: 8080,
  // });