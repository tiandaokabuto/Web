/**
 * 事件驱动
 */

var events = require('events')

var eventsEmitter = new events.EventEmitter()

// 监听board的广播
eventsEmitter.on('board', (str) => {
  console.log(str)
  console.log("接受到这个广播")
})

setTimeout(() => {
  // 发送广播
  eventsEmitter.emit('board', '数据')
}, 2000)