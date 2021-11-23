const NacosConfigClient = require('nacos').NacosConfigClient; // js

// for find address mode
// const configClient = new NacosConfigClient({
//   endpoint: 'acm.aliyun.com',
//   namespace: '***************',
//   accessKey: '***************',
//   secretKey: '***************',
//   requestTimeout: 6000,
// });

// for direct mode
const configClient = new NacosConfigClient({
  serverAddr: '127.0.0.1:8848',
});


const getConfig = async () => {
  // get config once
  const content= await configClient.getConfig('nacos-config-client-dev.yaml', 'DEFAULT_GROUP');
  console.log('getConfig = ',content);

  // listen data changed
  configClient.subscribe({
    dataId: 'my_sentinel',
    group: 'DEFAULT_GROUP',
  }, content => {
    console.log(content);
  });
}


const pushConfig = async () => {
  // publish config
  const content= await configClient.publishSingle('test1.txt', 'DEFAULT_GROUP', '测试');
  console.log('getConfig = ',content);
}

const removeConfig = async () => {
// remove config
  await configClient.remove('test1.txt', 'DEFAULT_GROUP');
}

getConfig();