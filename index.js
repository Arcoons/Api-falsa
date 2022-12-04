const express = require('express')
const conexionBD = require('./db');
const app = express()
const port = process.env.port || 3000
const userRutas = require('./routes/Routes')
conexionBD()
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.set('views',__dirname + '/views')
app.use(express.json())

app.use('/', userRutas)


app.get('/', (req, res) =>{
    res.send('hola mi server en express')
})


app.listen(port, () =>{
    console.log('puerto 3000');
})