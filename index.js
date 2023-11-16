const express = require('express');
const data = require('./data')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')


app
.use(cors())
.use(bodyParser.json({extended: true}))
.use(bodyParser.urlencoded({extended: true}))
.get('/',(req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end( data )
})
.post('/', (req, res)=>{
    res.end( JSON.stringify(req.body) )
})
.listen(3000)