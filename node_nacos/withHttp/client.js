'use strict';

const LBA = require('load-balancer-algorithm');
const axios = require('axios');
const { getServer } = require('../serverDiscovery');

const serverMap = new Map();
const _getServerAddress = async (serverName) => {
  const addresses = serverMap.get(serverName);
  if (addresses) {
    return addresses;
  }

  const hosts = await getServer(serverName), // 获取服务地址
    pools = hosts.map(v => {
      return {
        host: `${v.ip}:${v.port}`, weight: 1
      }
    });
  
  serverMap.set(serverName, pools);
  return pools;
};

const _visitServer = async (serverName, url) => {
  const addresses = await _getServerAddress(serverName),
    loadBalance = new LBA.WeightedRoundRobin(addresses),
    address = loadBalance.pick(); // 负载均衡选择一个地址
 
  console.log('~~~~~~~~~~~~\n', address);
  
  const r = await axios.get(`http://${address.host}${url}`);
  console.log('~~~~~~~~~~~~\n', r.data);
}

const main = async () => {
  for (let i = 0; i < 10; i++) {
    await _visitServer('fastify-demo-server', '/hello');
  }
}

main();