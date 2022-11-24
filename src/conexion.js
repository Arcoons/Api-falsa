const mongoose = require('mongoose');
const conexionBD=async()=>{
    
    try{
        const DB=await mongoose.connect('mongodb+srv://spike:6SNrR3eXVJbcLOmm@cluster0.kuapygk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(  error){
        console.log(error);
    }
}

module.exports=conexionBD;