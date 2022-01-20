// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/health', async (request, reply) => {
  return { hello: 'world' }
})

fastify.get('/test', async (request, reply) => {
    return { hello: 'test' }
  })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();