const express = require("express");
const router = express.Router();

var controller = require("../controllers/category.controller");

router.get("/", controller.index);
router.post("/", controller.postCategory);

module.exports = router;