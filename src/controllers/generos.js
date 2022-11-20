const moongose = require('mongoose');
const Genero = require('../models/genero');


const findAllGeneros = (req, res) => {
    Genero.find((err, users) => {
        err && res.send(500).send(err.message);
        res.status(200).json(Genero);
    });
};
const findById = (req, res) => {
    Genero.findById(req.params.id, (err, user) => {
        err && res.status(500).send(err.message);
        res.status(200).json(Genero);
    });

};

const addGenero = (req, res) => {
    let genero = new Genero({
        _id: req.body._id,
        idGenero: req.body.idGenero,
        nombreGenero: req.body.nombreGenero,
        Descripcion: req.body.Descripcion
    });
    genero.save=((err,ger)=>{
        err && res.status(500).send(err.message);
        res.status(200).jos(ger)
    });
};

module.exports={findAllGeneros, findById, addGenero};