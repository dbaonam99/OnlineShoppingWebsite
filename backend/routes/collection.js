const express = require("express");
const router = express.Router();
const multer = require("multer")
var upload = multer({ dest: './public/images'})

var controller = require("../controllers/collection.controller");

router.get("/", controller.index);
router.get("/:id", controller.info)
router.post("/delete/:id", controller.deleteCollection);
router.post("/",  upload.array("collectionBanner", 12), controller.postCollection);
router.post("/update/:id", upload.array("collectionBanner", 12), controller.updateCollection); 

module.exports = router;