const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use(serveStatic('/Users/hanjianjie/workspace/firstgrid/pc/dist'))
// app.use(serveStatic(path.join(__dirname, 'public')))  // 可设置多个root目录，将会依次寻找
app.listen(3000)