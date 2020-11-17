const express = require("express");
const router = express.Router();

var controller = require("../controllers/todos.controller");

router.get("/",  controller.index);
router.post("/",  controller.postTodo);
router.post("/update",  controller.updateTodo);

module.exports = router;