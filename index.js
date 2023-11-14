const http = require('http');
const data = require('./data')

http.createServer((req, res)=>{
    res.writeHead(200, {'COntent-Type': 'application/json'})
    res.end( data )
})
.listen(3000)