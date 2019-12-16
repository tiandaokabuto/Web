var F = {}
var http = require('http')
var url = require('url')
// 2.如果F里面存在已经注册的方法就执行
var app = (req, res) => {
  let pathname = url.parse(req.url).pathname.replace('/', '')
  console.log(pathname)
  if (F[pathname]) {
    F[pathname](req, res)
  }
  res.end(pathname)
}
// 1.注册方法
app.get = (str, callback) => {
  F[str] = callback
}

// app.get('login', (req, res) => {
//   console.log('login')
// })

// setTimeout(() => {
//   app('req', 'res')
// }, 2000)

/**
 * 结合其他模块创建服务器
 */

// 有http请求时就会触发
http.createServer(app).listen(8081)
app.get('login', (req, res) => {
  console.log('login')
})
