import app from 'express'()
import http from 'http'.Server(app)
import io from 'socket.io'(http)

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
	socket.on("request", (msg) => {
		io.emit("request", msg)
	})
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})