const AlbumController= require('../controllers/generos');
const express= require('express');

const router = express.Router();

router.get("/genero", AlbumController.findAllGeneros);

router.get("/gernero/1", AlbumController.findById);

router.post("/genero", AlbumController.addGenero);

module.exports=router;