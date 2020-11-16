const express = require("express");
const router = express.Router();

var controller = require("../controllers/order.controller");

router.get("/", controller.index);
router.get("/:id", controller.orderInfo);
router.post("/", controller.postOrder);
router.post("/delete/:id", controller.deleteOrder);
router.post("/update/:id", controller.updateOrder);

module.exports = router; 