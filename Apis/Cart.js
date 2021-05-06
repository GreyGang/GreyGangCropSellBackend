const { Router } = require("express");
const {
  GET_CART_ITEM,
  ADD_CART_ITEM,
  DELETE_ITEM,
} = require("../Controllers/CartController");
const router = Router();

router.get("/cart/:id", GET_CART_ITEM);
router.post("/cart/:id", ADD_CART_ITEM);
router.delete("/cart/:userId/:itemId", DELETE_ITEM);

module.exports = router;
