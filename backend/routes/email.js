const express = require("express");
const router = express.Router();

var controller = require("../controllers/email.controller");

router.get("/:idUser/:idEmail", controller.index);
// router.get("/", controller.getAllEmail);
router.get("/", controller.list);
router.get("/:id", controller.info);
router.post("/", controller.postEmail);
router.post("/update/:id", controller.updateEmail);
router.post("/delete/:id", controller.deleteSubscriber);

module.exports = router;