const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const AlbumSchema=new Schema({
    _id:Number,
    idAlbum:Number,
    nombreAlbum: String,
    anioPublicacion:Number,
});

module.exports= mongoose.model('album', AlbumSchema);