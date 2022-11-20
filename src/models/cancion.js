const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const CancionSchema=new Schema({
    _id:int,
    idCancion:int,
    nombreCancion:String,
    duracionCancion:int,
    idAlbum:int
});

module.exports=mongoose.model('cancion', CancionSchema);