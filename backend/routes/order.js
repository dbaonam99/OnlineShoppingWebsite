const express = require("express");
const router = express.Router();

var controller = require("../controllers/order.controller");

router.get("/", controller.index);
router.post("/", controller.postOrder);
router.post("/delete/:id", controller.deleteOrder);

module.exports = router;