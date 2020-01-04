/**
 * querystring：在URL中，从“？”开始到“#”结束的部分
 */

// 对象序列化为querystring
const querystring = require('querystring')

const obj = {
  url: 'www.baidu.com/search',
  name: 'user'
}

const str = querystring.stringify(obj)
console.log(str) // url=www.baidu.com%2Fsearch&name=user

// querystring解析为对象
console.log(querystring.parse(str))

// 对querystring中的参数进行编码
let escape = querystring.escape(str)
console.log(escape) // url%3Dwww.baidu.com%252Fsearch%26name%3Duser

// 编码的querystring进行解码
console.log(querystring.unescape(escape))

