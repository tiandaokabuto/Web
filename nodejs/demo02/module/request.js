var obj = {
  get: () => {
    console.log('获取数据')
  },
  post: () => {
    console.log('提交数据')
  }
}

// exports.request = obj // 把 = 后面的内容封装到 = 前面的那个变量里面，变成键值对 request: obj

module.exports = obj // 直接把obj里面的内容暴露出去