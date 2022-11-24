const AlbumController= require('../controllers/canciones');
const express= require('express');

const router = express.Router();

router.get("/cancion", AlbumController.findAllCanciones);

router.get("/cancion/1", AlbumController.findById);

router.post("/cancion", AlbumController.addCancion);

module.exports=router;