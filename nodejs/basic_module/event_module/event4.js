/**
 * 只调用一次的事件监听器
 */
const EventEmit = require('events')

class Person extends EventEmit {}

const person = new Person()

person.once('play', data => { // 只触发一次
  console.log(data)
})

person.emit('play', 'test1')
person.emit('play', 'test2') // 不输出