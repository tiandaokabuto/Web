/**
 * 移除监听
 */
const EventEmit = require('events')

class Person extends EventEmit {}

const person = new Person()

function play () {
  console.log('play')
}
person.on('play', play)

person.emit('play')

person.removeListener('play', play)

person.emit('play') // 移除之后不触发