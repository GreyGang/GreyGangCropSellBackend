const { Router } = require("express");
const { GET_ORDER, CHECKOUT } = require("../controllers/OrderControllers");
const router = Router();

router.get("/order/:id", GET_ORDER);
router.post("/order/:id", CHECKOUT);

module.exports = router;
