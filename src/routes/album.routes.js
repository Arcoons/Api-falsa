const AlbumController= require('../controllers/albumes');
const express= require('express');

const router = express.Router();

router.get("/album", AlbumController.findAllAlbumes);

router.get("/album/1", AlbumController.findById);

router.post("/album", AlbumController.addAlbum);

module.exports=router;