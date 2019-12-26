/**
 * 多个响应器，this指向
 */
const EventEmit = require('events')

class Person extends EventEmit {}

const person = new Person()

person.on('play', data => {
  console.log('play')
  console.log(this) // 使用箭头函数输出为 {}
})

person.on('play', function (data) {
  console.log('play again')
  console.log(this) // 输出Person
})
person.emit('play', 'test this') // 同时绑定了两个play事件，按顺序执行