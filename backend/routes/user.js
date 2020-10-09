const express = require("express");
const router = express.Router();

var controller = require("../controllers/user.controller");

router.get("/", controller.index);
router.post("/login", controller.postLogin);
router.post("/register", controller.register);

module.exports = router;