const Consul = require('consul');
const axios = require('axios');

const consul = new Consul({
    host: '127.0.0.1',
    port: 8500,
    promisify: true,
});

consul.agent.service.register({
    name: 'fastify_demo_server',
    address: '127.0.0.1',
    port: 3000,
    check: {
        http: 'http://127.0.0.1:3000/health',
        interval: '10s',
        timeout: '5s',
    }
}, function(err, result) {
    if (err) {
        console.error(err);
        throw err;
    }

    console.log('fastify_demo_server 注册成功！');
})

async function main () {
    // const testK = await consul.kv.get('test');
    // console.log(testK);

    const user = {
        name: 'aa', age: 18
    }

    await consul.kv.set('develop/user', JSON.stringify(user));

    const devU = await consul.kv.get('develop/user');
    console.log(devU);

    const { fastify_demo_server } = await consul.agent.service.list(); // 获取服务
    console.log(fastify_demo_server);


    const r = await axios.get(`http://${fastify_demo_server.Address}:${fastify_demo_server.Port}/test`);
    console.log(r.data);
}

main();

