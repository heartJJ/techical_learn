/**
 * finalhandler作为http响应请求的最后一步调用
 */
const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

// Serve up public/ftp folder
const serve = serveStatic('/Users/hanjianjie/workspace/firstgrid/pc/dist', { 'index': ['index.html', 'index.htm'] })

// Create server
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3000)