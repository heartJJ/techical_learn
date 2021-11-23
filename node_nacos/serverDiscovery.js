'use strict';

const NacosNamingClient = require('nacos').NacosNamingClient;
const logger = console;
const LBA = require('load-balancer-algorithm');
const axios = require('axios');

const connectNacos = async () => {
  const client = new NacosNamingClient({
    logger,
    serverList: '127.0.0.1:8848', // replace to real nacos serverList
    namespace: 'public',
  });
  await client.ready();

  return client;

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
}

const getPayment = async (client) => {
  return new Promise((resolve, reject) => {
    // subscribe instance
    client.subscribe('nacos-payment-provider', hosts => {
      console.log('~~~~~~~~~~~~\n', hosts);
      return resolve(hosts);
    });
  })
}


const visitPayment = async (client) => {
  const hosts = await getPayment(client), // 获取服务地址
    pools = hosts.map(v => {
      return {
        host: `${v.ip}:${v.port}`, weight: 1
      }
    }),
    loadBalance = new LBA.WeightedRoundRobin(pools),
    address = loadBalance.pick(); // 负载均衡选择一个地址
 
  console.log('~~~~~~~~~~~~\n', address);
  
  const r = await axios.get(`http://${address.host}/echo/nacos_node`);
  console.log('~~~~~~~~~~~~\n', r.data);
}

const main = async () => {
  const client = await connectNacos();
  await visitPayment(client);
}


main();


