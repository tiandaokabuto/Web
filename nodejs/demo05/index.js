/**
 * 搭建静态web服务器
 * HTTP模块 URL模块 FS模块 PATH模块
 */
var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

http.createServer(function (request, response) {
  // 解析url获取地址
  let pathName = url.parse(request.url).pathname
  // 设置默认加载的页面
  if (pathName === '/') {
    pathName = '/index.html'
  }
  // 获取后缀名
  let exname = path.extname(pathName)
  if (pathName !== '/favicon.ico') {
    // 在服务器文件夹里面寻找指定页面
    fs.readFile('./static/' + pathName, (err, data) => {
      if (err) {
        console.log(err)
        return
      } else {
        // 根据加载的文件来动态设置content-type
        let name = getType(exname)
        response.writeHead(200, { 'Content-Type': name + ';charset="utf-8"' })
        response.write(data)
        response.end()
      }
    })
  }
}).listen(8081)

function getType(name) {
  let result = ''
  switch (name) {
    case '.html':
      result = 'text/html'
      break
    case '.css':
      result = 'text/css'
      break
    case '.js':
      result = 'text/javascript'
      break
    default:
      result = 'text/html'
  }
  return result
}
