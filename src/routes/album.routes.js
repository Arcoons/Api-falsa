const AlbumController= require('../controllers/albumes');
const express= requiere('express');

const router = express.Router();

router.get("/all", AlbumController.findAllAlbumes);

router.get("/:id", AlbumController.findById);

router.post("/add", AlbumController.addAlbum);

module.exports=router;