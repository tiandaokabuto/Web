const net = require("net")

const socket = new net.Socket()

const port = 3000

// const hostname = "192.168.72.54"
const hostname = '192.168.43.145'


socket.setEncoding = "UTF-8"

socket.connect(port, hostname, function() {
  socket.write("hello server")
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
