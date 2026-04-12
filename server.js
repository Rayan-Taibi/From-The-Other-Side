import http from 'node:http'

const PORT = 8000

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>The server is working!</h1></body></html>')
})

server.listen(PORT , () => {
    console.log(`Connected on port : ${PORT}`)
})