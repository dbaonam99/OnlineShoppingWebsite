const express = require("express");
const router = express.Router();
const multer = require("multer")

var controller = require("../controllers/user.controller");
var middleware = require("../middlewares/token.middleware")

var upload = multer({ dest: './public/images'})

router.get("/",  middleware.verifyToken, controller.index);
router.get("/:id",  middleware.verifyToken, controller.info); 
router.post("/login", controller.postLogin);
router.post("/register", controller.register);
router.post("/update/:id", upload.array("userAvt", 12), controller.updateUser);

module.exports = router;