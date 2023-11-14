const express = require('express');
const data = require('./data')
const cors = require('cors')
const app = express()


app
.use(cors())
.get('/',(req, res)=>{
    res.writeHead(200, {'COntent-Type': 'application/json'})
    res.end( data )
})

.listen(3000)