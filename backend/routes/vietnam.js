const express = require("express");
const router = express.Router();

var controller = require("../controllers/vietnam.controller");

router.get("/",  controller.index);

module.exports = router;