const net = require( 'net' );
const port = 3000;
const hostname = '192.168.72.54';

// 定义两个变量， 一个用来计数，一个用来保存客户端
let clients = {};
let clientName = 0;

// 创建服务器
const server = new net.createServer();

server.on('connection', (client) => {
  client.name = ++clientName; // 给每一个client起个名
  clients[client.name] = client; // 将client保存在clients
  // let count
  client.on('data', function (msg) { //接收client发来的信息
    console.log(`客户端${client.name}发来一个信息：${msg}`);
    // client.send(msg)
    console.log(msg);
    client.write(msg)
    // setInterval(() => {
    //   client.write(count)
    // }, 3000);
  });

  client.on('error', function (e) { //监听客户端异常
    console.log('client error' + e);
    client.end();
  });

  client.on( 'close', function () {
    delete clients[client.name];
    console.log(`客户端${ client.name }下线了`);
  });

});

server.listen( port,hostname,function () {
  console.log(`服务器运行在：http://${hostname}:${port}`);
});