const mongoose = require('mongoose')

const cancionSchema = mongoose.Schema({
    _id:{
        type: Number,
        required: true
    },
    nombreCancion:{
        type:String,
        required: true
    },
    fechaGrabacion:{
        type: String,
        required: true
    },
    duracionCancion:{
        type:String,
        require:true
    },
    estadoCancion:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('cancion', cancionSchema)