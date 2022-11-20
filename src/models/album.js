const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const AlbumSchema=new Schema({
    _id:{type: int},
    idAlbum:{type:int},
    nombreAlbum:{type: String},
    anioPublicacion:{type:int},
    idCancion:{type:int},
    idGenero:{type:int}
});

module.exports= album = mongoose.model('album', AlbumSchema);