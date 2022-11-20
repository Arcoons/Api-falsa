const mongoose= require('mongoose');
const {Schema, model}=mongoose.Schema;

const AlbumSchema=new Schema({
    _id:{type: int},
    idAlbum:int,
    nombreAlbum:String,
    anioPublicacion:int,
    idCancion:int,
    idGenero:int
});

module.exports= mongoose.model('album', AlbumSchema);