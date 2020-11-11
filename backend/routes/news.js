const express = require("express");
const router = express.Router();
const multer = require("multer")
var upload = multer({ dest: './public/images'})

var controller = require("../controllers/news.controller");

router.get("/", controller.index);
router.get("/category/:cate", controller.cate);
router.get("/:id", controller.news);
router.post("/delete/:id", controller.deleteNews);
router.post("/update/:id", upload.array("newImg", 12), controller.updateNews); 
router.post("/",  upload.array("newImg", 12), controller.postNews);
 
module.exports = router;