/**
 * 文件解压
 */
const zlib = require('zlib')
const fs = require('fs')

const inputStream = fs.createReadStream('un-zlib.txt.gz')
const outputStream = fs.createWriteStream('un-zlib.txt')

const gunzip = zlib.createGunzip()
inputStream.pipe(gunzip).pipe(outputStream)