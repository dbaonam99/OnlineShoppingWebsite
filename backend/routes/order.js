const express = require("express");
const router = express.Router();

var controller = require("../controllers/order.controller");

router.get("/", controller.index);
router.post("/", controller.postOrder);

module.exports = router;