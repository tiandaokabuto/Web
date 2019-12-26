/**
 * 文件压缩
 */

const zlib = require('zlib')
const fs = require('fs')

const inputStream = fs.createReadStream('zlib.txt')
const outputStream = fs.createWriteStream('zlib.txt.gz')

const gzip = zlib.createGzip()
inputStream.pipe(gzip).pipe(outputStream)