const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('您好，请问您如何看待xxx？', answer => {
  console.log(`感谢您的宝贵意见，${answer}`)
  rl.close()
})