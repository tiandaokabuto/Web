/**
 * events模块
 * 基础例子
 */
const EventsEmit = require('events')
class App extends EventsEmit {}
const app = new App()
app.on('data', data => {
  console.log(data)
})
app.emit('data', 'this is data')