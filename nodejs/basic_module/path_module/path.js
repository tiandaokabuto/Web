const path = require('path')

// 获取路径的目录名
console.log(path.dirname('/path1/path2/example.js'))

// 获取路径扩展名
console.log(path.extname('/path1/path2/example.js'))

// 是否绝对路径
console.log(path.isAbsolute('/path1/path2/example.js'))
console.log(path.isAbsolute('./path1/path2/example.js'))

// 拼接路径
console.log(path.join('path1', '/path2','./example.js'))

// 将路径或者路径片段解析为绝对路径
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))
console.log(path.resolve('/foo/bar', '/tmp/file/'))

// 解析路径
console.log(path.parse('/path/example/index.js'))

// 序列化路径
console.log(path.format({
  root: '/',
  dir: '/path/example',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}))

// 路径规范化
console.log(path.normalize('/path///example/index.js'))
