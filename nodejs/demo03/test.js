/**
 * 练习：把一个文件夹里面的文件夹名存放到一个数组里面
 */
const fs = require('fs')
const PATH = './testdir'
let arr = []

async function isDir (path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, res) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      if (res.isDirectory()) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

function readDir () {
  fs.readdir(PATH, async (err, data) => {
    if (err) {
      console.log(err)
      return 
    } else {
      for (let i = 0; i < data.length; i++) {
        let flag = await isDir(PATH + '/' + data[i])
        if (flag) {
          arr.push(data[i])
        }
      }
      console.log(arr)
    }
  })
}

readDir()
