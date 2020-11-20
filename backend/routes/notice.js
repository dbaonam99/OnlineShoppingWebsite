const express = require("express");
const router = express.Router();

var controller = require("../controllers/notice.controller");

router.get("/",  controller.index);
router.post("/update", controller.updateNotice);

module.exports = router;