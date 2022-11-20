const moongose = require('mongoose');
const Album = require('../models/album');


const findAllAlbumes = (req, res) => {
    Album.find((err, users) => {
        err && res.send(500).send(err.message);
        res.status(200).json(Album);
    });
};
const findById = (req, res) => {
    Album.findById(req.params.id, (err, user) => {
        err && res.status(500).send(err.message);
        res.status(200).json(Album);
    });

};

const addAlbum = (req, res) => {
    let album = new Album({
        _id: req.body._id,
        idAlbum: req.body.idAlbum,
        nombreAlbum: req.body.nombreAlbum,
        anioPublicacion: req.body.anioPublicacion,
        idCancion: req.body.idCancion,
        idGenero: req.body.idGenero
    });
    album.save=((err,alm)=>{
        err && res.status(500).send(err.message);
        res.status(200).jos(alm)
    });
};

module.exports={findAllAlbumes, findById, addAlbum};