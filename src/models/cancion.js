const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const CancionSchema=new Schema({
    _id:{type: int},
    idCancion:{type:int},
    nombreCancion:{type: String},
    duracionCancion:{type:int},
    idAlbum:{type:int}
});

module.exports= cancion =mongoose.model('cancion', CancionSchema);