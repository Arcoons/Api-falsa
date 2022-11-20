const moongose = require('mongoose');
const Cancion = require('../models/cancion');


const findAllCanciones = (req, res) => {
    Cancion.find((err, users) => {
        err && res.send(500).send(err.message);
        res.status(200).json(Cancion);
    });
};
const findById = (req, res) => {
    Cancion.findById(req.params.id, (err, user) => {
        err && res.status(500).send(err.message);
        res.status(200).json(Cancion);
    });

};

const addCancion = (req, res) => {
    let cancion = new Cancion({
        _id: req.body._id,
        idCancion: req.body.idCancion,
        nombreCancion: req.body.nombreCancion,
        duracionCancion: req.body.duracionCancion,
        idAlbum: req.body.idAlbum

    });
    cancion.save=((err,can)=>{
        err && res.status(500).send(err.message);
        res.status(200).jos(can)
    });
};

module.exports={findAllCanciones, findById, addCancion};