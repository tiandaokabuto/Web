// 01.引入http模块
var http = require('http');

// 02.创建服务
// request获取url传过来的信息
// response给浏览器响应信息
http.createServer(function (request, response) {
  // 03.添加响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081); // 监听网站端口

console.log('Server running at http://127.0.0.1:8081/');