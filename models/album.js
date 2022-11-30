const mongoose = require('mongoose')
const {Schema}=require("mongoose");

const albumSchema = mongoose.Schema({

    _id: {
        type: Number,
        required: true
    },

    nombreAlbum: {
        type: String,
        required: true
    },
    anioPublicacion: {
        type: String,
        required: true
    },
    estadoAlbum:{
        type:String,
        required:true
    },
    genero:[{
        type:Schema.Types.Number,
        ref: 'genero'
    }]
})

module.exports = mongoose.model('album', albumSchema)