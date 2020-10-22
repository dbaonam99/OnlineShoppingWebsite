const express = require("express");
const router = express.Router();

var controller = require("../controllers/collection.controller");

router.get("/", controller.index);
router.get("/:id", controller.info)

module.exports = router;