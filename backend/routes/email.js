const express = require("express");
const router = express.Router();

var controller = require("../controllers/email.controller");

router.get("/:id", controller.index);
router.post("/", controller.postEmail);

module.exports = router;