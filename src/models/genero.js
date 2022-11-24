const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const GeneroSchema=new Schema({
    _id:Number,
    idGenero:Number,
    nombreGenero:String,
    Descripcion:String
});

module.exports= mongoose.model('genero', GeneroSchema);