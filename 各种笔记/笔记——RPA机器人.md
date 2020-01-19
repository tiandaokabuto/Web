### 笔记——RPA机器人

#### 1.主进程使用Node.js创建socket与python进行通信

```javascript
1.net模块创建
const net = require('net');
const port = 3000;
const hostname = '192.168.72.54';
const clients = [];
let clientName = 0;
const server = new net.createServer();

server.on('connection', client => {
  client.name = ++clientName; // 给每一个client编号
  clients[client.name] = client; // 将client保存在clients

  client.on('data', msg => {
    // 接收client发来的信息
    console.log(`client${client.name}send a msg:${msg}`);
    // 给client发送消息
    client.write(msg);
  });
  client.on('error', e => {
    // 监听客户端异常
    console.log(`client error${e}`);
    client.end();
  });
  client.on('close', () => {
    // 监听客户端关闭
    delete clients[client.name];
    console.log(`client${client.name}close`);
  });
});

server.listen(port, hostname, () => {
  console.log(`server on : http://${hostname}:${port}`);
});
2.socket.io创建
```

#### 2.在渲染进程创建websocket与web服务器进行通信

```javascript
    this.socket = new WebSocket(
      'ws://172.168.201.90:19090/controller/robotWebsocket'
    );
    this.socket.onopen = () => {
      console.log('连接建立');
    };
    this.socket.onmessage = msg => {
      console.log('接收数据');
      this.getProcessId(msg);
    };
    this.socket.onclose = () => {
      console.log('关闭连接');
    };
```
