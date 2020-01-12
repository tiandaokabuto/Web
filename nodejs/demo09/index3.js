const ws = require('nodejs-websocket')
console.log('开始建立连接')

const server = ws.createServer(connection => {
    connection.on('text', str => {
        connection.sendText('hi client')
        console.log(str)
    })
    connection.on('close', (code, res) => {
        console.log('close connection')
    })
}).listen(3001)

console.log('建立成功')