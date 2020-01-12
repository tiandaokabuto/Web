const net = require("net")

const socket = new net.Socket()

const port = 3000

const hostname = "192.168.72.54"

socket.setEncoding = "UTF-8"

let count = 0
socket.connect(port, hostname, function() {
  // socket.write("hello server")
  // setInterval(() => {
  //   socket.write('msg' + count)
  //   count++
  // }, 3000)
  let data = {
    taskID: "123"
  }
  socket.write(JSON.stringify(data))
})

socket.on("data", function(msg) {
  console.log(msg.toString())
})

socket.on("error", function(error) {
  console.log("error" + error)
})

socket.on("close", function() {
  console.log("server close")
})
