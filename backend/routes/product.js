const express = require("express");
const multer = require("multer")
const router = express.Router();

var controller = require("../controllers/product.controller");

var upload = multer({ dest: './public/images'})

router.get("/", controller.index);
router.get("/:id", controller.product);
router.post("/", upload.array("productImg", 12) ,controller.postProduct);
router.post("/delete/:id", controller.deleteProduct);

module.exports = router;