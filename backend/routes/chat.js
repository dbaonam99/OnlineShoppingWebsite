const express = require("express");
const router = express.Router();

var controller = require("../controllers/chat.controller");

router.get("/", controller.index);
router.get("/:sessionId", controller.chatData);
router.post("/", controller.newChat);

module.exports = router;