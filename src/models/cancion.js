const mongoose= require('mongoose');
const Schema=mongoose.Schema;

const CancionSchema=new Schema({
    _id:Number,
    idCancion:Number,
    nombreCancion:String,
    duracionCancion:Number,
    idAlbum:Number
});

module.exports=mongoose.model('cancion', CancionSchema);