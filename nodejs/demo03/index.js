/**
 * FS模块使用
 * fs.stat 检测是文件还是目录
 * fs.mkdir 创建目录
 * fs.writeFile 写入文件
 * fs.appendFile 追加文件
 * fs.readFile 读取文件
 * fs.readdir 读取目录
 * fs.rename 重命名
 * fs.rmdir 删除目录
 * fs.unlink 删除文件
 */

const fs = require('fs')

fs.stat('package.json', (err, res)=> {
  if (err) {
    console.log(err)
    return
  } else {
    console.log(res.isFile())
    console.log(res.isDirectory())
  }
})

// fs.mkdir('css', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   } else {
//     console.log('创建成功')
//   }
// })

// 替换文件夹里面的内容
// fs.writeFile('./css/style.css', 'background: blue', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   } else {
//     console.log('写入成功')
//   }
// })

// 在原文件的内容里追加内容
// fs.appendFile('./css/style.css', 'background: blue', (err) => {
//   if (err) {
//     console.log(err)
//     return
//   } else {
//     console.log('写入成功')
//   }
// })

// fs.readFile('./css/style.css', (err, data) => {
//   if (err) {
//   console.log(err)
//   return
//   } else {
//     console.log(`读取文件内容${data.toString()}`)
//   }
// })

// fs.readdir('./css', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   } else {
//     console.log(`读取目录内容${data.toString()}`)
//   }
// })

// 重命名or移动文件
fs.rename('./css/aaa.css', './css/index.css', (err) => {
  
})

// 目录里面有文件不能删除
fs.rmdir('./test', (err) => {
  if (err) {
    console.log(err)
    return 
  } else {
    console.log('删除成功')
  }
})

fs.unlink('./css/index.css', (err) => {
  if (err) {
    console.log(err)
    return 
  } else {
    console.log('删除成功')
  }
})