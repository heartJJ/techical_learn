const path = require('path')
const fs = require('fs');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const allProto = {};

fs.readdirSync(__dirname)
  .filter(filename => path.extname(filename) === '.proto')
  .map(filename => {
    const packageDefinition = protoLoader.loadSync(path.resolve(__dirname, filename), {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    })

    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
    Object.assign(allProto, protoDescriptor);
  });

module.exports = allProto;


