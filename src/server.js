const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = process.env.PORT || 8060

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>')
})

io.on('connection', function (socket) {
    console.log('a user connected')
    socket.on('chat message', function (msg) {
        console.log('message:' + JSON.stringify(msg))
        io.emit('chat message', msg)
    })
})

http.listen(PORT, function () {
    console.log(`listening on *:${PORT}`)
})