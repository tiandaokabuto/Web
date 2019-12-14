/**
 * 文件流
 */

const fs = require('fs')

/**
 * 以流的方式读取文件
 */
// 创建一个读取流
// let readStream = fs.createReadStream('./data/input.txt')
// let count = 0
// let str = ''
// 监听读取时的状态
// readStream.on('data', data => {
//   count++
//   str += data
// })
// 监听读取完成的状态
// readStream.on('end', data => {
//   console.log(str)
//   console.log(count)
// })



/**
 * 以流的方式写入文件 
 */
// let str = ''
// for (let i = 0; i < 100; i++) {
//   str += '这是数据\n'
// }

// let writeStream = fs.createWriteStream('./data/ouput.txt')

// writeStream.write(str)

// 标记写入完成，执行该方法之后才会被监听到finish
// writeStream.end()

// writeStream.on('finish', () => {
//   console.log('写入完成')
// })



/**
 * 管道流
 * 复制大文件
 */
let readStream = fs.createReadStream('./data/mrfz.png')

let writeStream = fs.createWriteStream('./mrfz.png')

// 把读取的readStream写入到writeStream
readStream.pipe(writeStream)
console.log('复制完毕')