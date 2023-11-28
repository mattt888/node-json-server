const express = require('express');
const data = require('./data')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')


app
.use(cors())
.use(bodyParser.json({extended: true}))
/*
ez itt egy middleware: .use(bodyParser.urlencoded({extended: true}))
middleware: ez 1 köztes réteg, ami a request-et megszűri mielőtt átadná a feldolgozó rétegnek 
egy szűrőként funkcionál, nem az a funkciója h bizonyos adatokat átenged, bizonyos adatokat meg nem
hanem abban merül ki a tevékenysége h az adatokat mindent átengedi  
de vmilyen transzformációt végez az adatokon 
azért h a feldolgozó réteg számára értelmezhető legyen
egyfajta előértelmező 
middleware = egyfajta előértelmező 
*/
.use(bodyParser.urlencoded({extended: true}))
.get('/',(req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end( data )
})
.post('/', (req, res)=>{
    // átírtam req.body.name-re
    // ezzel bizonyítjuk h elértük az adatot
    res.end( req.body.name)
})
.listen(3000)