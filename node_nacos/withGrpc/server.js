const grpc = require('@grpc/grpc-js');
const allProto = require('./loadProto');
const methods = require('./methods');
const { connectNacos } = require('../serverDiscovery');

const _startServer = async (server) => {
  return new Promise((resolve, reject) => {
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
      server.start()
      console.log('grpc server started');
      resolve();
    })
  });
}

const main = async () => {
  const server = new grpc.Server();

  Object.keys(allProto).forEach(packageName => {
    const package = allProto[packageName]; // 获取 package

    Object.keys(package).forEach(paramName => {
      const param = package[paramName]; // 获取 对应属性
      if (typeof param === 'function') { // 仅保留 service属性
        const service = param.service;
        const allMethod = {};
        Object.keys(service).map(method => allMethod[method] = methods[method] );
        server.addService(service, allMethod);
      } 
    });
  });

  await _startServer(server);

  const nacosClient = await connectNacos();

  await nacosClient.registerInstance('grpc.demo.server', {
      ip: '0.0.0.0',
      port: 50051,
  });
};

main();