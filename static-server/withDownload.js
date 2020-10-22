/**
 * 默认下载文件
 */
const contentDisposition = require('content-disposition')
const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

// Serve up public/ftp folder
const serve = serveStatic('/Users/hanjianjie/workspace/firstgrid/pc/dist', {
  'index': false,
  'setHeaders': setHeaders
})

// Set header to force download
function setHeaders (res, path) {
  res.setHeader('Content-Disposition', contentDisposition(path))
}

// Create server
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3000)