const express = require("express");
const router = express.Router();

var controller = require("../controllers/news.controller");

router.get("/", controller.index);
router.get("/:id", controller.news);

module.exports = router;