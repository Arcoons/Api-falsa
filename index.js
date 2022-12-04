const express = require('express')
const conexionBD = require('./db');
require('http')
const path = require('path');
const app = express()
conexionBD()

app.use(express.static('public'));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.json())

app.use('/', require('./routes/Routes'));



const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(PORT);
})