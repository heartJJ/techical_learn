const grpc = require('@grpc/grpc-js')
const allProto = require('./loadProto')
const { connectNacos, getServer } = require('../serverDiscovery');

const clentMap = new Map();

const _getClient = (packageName, serviceName, address) => {
    let client = clentMap.get(`${packageName}.${serviceName}`);
    if (client) {
        return client;
    }

    if (!allProto[packageName] || !allProto[packageName][serviceName]) {
        throw new Error('错误的调用地址');
    }

    
    client = new allProto[packageName][serviceName](address, grpc.credentials.createInsecure());

    const clientProxy = new Proxy(() => {}, {
        get: (target, propKey) => {
            target.method = propKey;
            return clientProxy;
        },
        apply: async (target, thisArgs, args) => {
            return new Promise((resolve, reject) => {
                client[target.method](args[0], function (err, response) {
                    err ? reject(err) : resolve(response);
                });
            });
        }
    });

    clentMap.set(`${packageName}.${serviceName}`, clientProxy);
    return clientProxy;
};

const main = async () => {
    const nacosClient = await connectNacos(),
        hosts = await getServer(nacosClient, 'grpc.demo.server'),
        address = `${hosts[0].ip}:${hosts[0].port}`;

    const client =  _getClient('h2', 'Say', address);
    const r = await client.getMsg({ id: 1 });
    console.log(r);
}


// function main() {
//     const client1 = new allProto.h1.Greeter('localhost:50051', grpc.credentials.createInsecure());
//     client1.sayHello({ message: 'Hello' }, function (err, response) {
//         if (err) {
//             console.error('Error: ', err)
//         } else {
//             console.log(response.message)
//         }
//     });

//     const client2 = new allProto.h2.Say('localhost:50051', grpc.credentials.createInsecure());
//     client2.getMsg({ id: 1 }, async (err, response) => {
//         if (err) {
//             console.error('Error: ', err)
//         } else {
//             console.log(response.name)
//         }
//     });
// }

main();