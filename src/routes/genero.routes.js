const AlbumController= require('../controllers/generos');
const express= requiere('express');

const router = express.Router();

router.get("/all", AlbumController.findAllGeneros);

router.get("/:id", AlbumController.findById);

router.post("/add", AlbumController.addGenero);

module.exports=router;