const express = require("express");
const router = express.Router();

var controller = require("../controllers/order.controller");

const ZaloPay = require("../zalopay"); 

router.get("/", controller.index);
router.get("/:id", controller.orderInfo);
router.post("/", controller.postOrder);
router.post("/delete/:id", controller.deleteOrder);
router.post("/update/:id", controller.updateOrder);

router.post("/zalo/createorder", async (req, res) => {
    const { ordertype } = req.query; 
    return res.send(await ZaloPay.CreateOrder(req.body)); 
})
  
router.get("/zalo/getorderstatus", async (req, res) => { 
    res.send(await ZaloPay.GetOrderStatus(req.query.morderid));
}); 
  
module.exports = router; 