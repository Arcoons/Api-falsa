const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const GeneroSchema=new Schema({
    _id:int,
    idGenero:int,
    nombreGenero:String,
    Descripcion:int
});

module.exports= mongoose.model('genero', GeneroSchema);