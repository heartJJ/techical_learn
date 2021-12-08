'use strict';

const { registryServer } = require('../serverDiscovery');

const fastify = require('fastify')({
  logger: true
});

fastify.get('/hello', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
});

fastify.listen(3000, async (err, address) => {
  if (err) throw err
  await registryServer('fastify-demo-server', '127.0.0.1', '3000');
  console.log(' Server is now listening on 3000');
});
