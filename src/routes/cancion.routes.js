const AlbumController= require('../controllers/canciones');
const express= requiere('express');

const router = express.Router();

router.get("/all", AlbumController.findAllCanciones);

router.get("/:id", AlbumController.findById);

router.post("/add", AlbumController.addCancion);

module.exports=router;