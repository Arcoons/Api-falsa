const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const GeneroSchema=new Schema({
    _id:{type: int},
    idGenero:{type:int},
    nombreGenero:{type: String},
    Descripcion:{type:int}
});

module.exports= genero = mongoose.model('genero', GeneroSchema);