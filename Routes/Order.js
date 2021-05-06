const { Router } = require("express");
const { GET_ORDERS, CHECKOUT } = require("../controllers/OrderController");
const router = Router();

router.get("/order/:id", GET_ORDERS);
router.post("/order/:id", CHECKOUT);

module.exports = router;
