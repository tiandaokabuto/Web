/**
 * 同步，异步
 */
const EventEmit = require('events')

class Person extends EventEmit {}

const person = new Person()

person.on('play', data => {
  console.log(data) // 1
})

person.emit('play', 'test') // 同步进行

console.log('msg') // 2

const person2 = new Person()

// setImmediate() 和 process.nextTick() 可以切换为异步
person2.on('play2', data => {
  process.nextTick(() => {
    console.log(data) // 2
  })
})

person2.emit('play2', 'test2')

console.log('msg2') // 1