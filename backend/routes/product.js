const express = require("express");
const router = express.Router();

var controller = require("../controllers/product.controller");

router.get("/", controller.index);
router.get("/:id", controller.product);

module.exports = router;