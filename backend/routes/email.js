const express = require("express");
const router = express.Router();

var controller = require("../controllers/email.controller");

router.get("/:idUser/:idEmail", controller.index);
router.get("/", controller.getAllEmail);
router.post("/", controller.postEmail);

module.exports = router;