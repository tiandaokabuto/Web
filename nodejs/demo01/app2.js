/**
 * http模块
 * url模块
 */
const http = require('http') // http模块
const url = require('url') // url模块

// npm install -g supervisor 安装自启动工具supervisor

http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    let params = url.parse(req.url, true).query
    console.log(params)
  }
  res.writeHead(200, {'Content-type': 'text/html;charset="utf-8"'})
  res.write('<head><meta charset="utf-8"></head>') // 解决中文的乱码
  res.write('<h2>你好</h2>')
  res.write('this is updated node.js')
  res.end()
}).listen(8081)

console.log('success')