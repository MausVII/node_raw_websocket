import { createServer } from 'http'

const PORT = 1337

const server = createServer( (req, res) => {
    res.writeHead(200)
    res.end('Hello, friend.')
})
.listen( 1337, () => {
    console.log(`Server listening on port: ${PORT}`)
})

server.on('upgrade', (req, socket, head) => {
    const { 'sec-websocket-key': webClientSocketKey } = req.headers
    console.log({webClientSocketKey}) 
})

// Error handling needs to keep server on
;
[
    "uncaughtException",
    "unhandledRejection"
].forEach( event => {
    process.on(event, err => {
        console.error(`Error occurred: ${event}, msg: ${err.stack || err}`)
    })
})
