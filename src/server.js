const express = require('express');
const morgan = require('morgan');
const conexionBD = require('./conexion');
const rutasAlbum = require('./routes/album.routes');
const rutasCancion=require('./routes/cancion.routes');
const rutasGenero=require('./routes/genero.routes');
const app = express()
const port= process.env.PORT || 4000;
conexionBD();


app.set("name","disquera");
app.set("port",process.env.port || 4000);


app.use(express.json());
app.use(morgan("dev"));

app.use("/album",rutasAlbum);
app.use("/cancion",rutasCancion);
app.use("/genero",rutasGenero);


module.exports=app;