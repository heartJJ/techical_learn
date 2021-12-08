const rpc = require('./rpcClient');

const main = async () => {
  const r1 = await rpc.grpcDemo.h1.Greeter.SayHello({ message: 'Hello' });
  console.log('*******', r1);

  const r2 = await rpc.grpcDemo.h2.Say.getMsg({ id: 1 });
  console.log('*******', r2);
};

main();