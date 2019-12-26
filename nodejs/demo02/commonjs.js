/**
 * commonJS
 * 包的使用
 */
var http = require('http');
var tools = require('./module/tool')

var axios = require('axios') // 可以省略前面的node_modules和后面的index.js
var db = require('db') // 在db文件夹里面通过npm init --yes 配置模块的入口文件为db.js

console.log(axios)

axios.get()
axios.post()

db.add()
db.select()

var req = require('./module/request')
// module.exports = obj { get: [Function: get], post: [Function: post] }
// req.get()
// exports.request = obj { request: { get: [Function: get], post: [Function: post] } } 很多方法的时候使用
// req.request.get()
// console.log(req)


http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(tools.formatAPI('abc'))
  response.end('Hello World');
}).listen(8081);
