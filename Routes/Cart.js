const { Router } = require("express");
const {
  GET_CART_ITEMS,
  ADD_CART_ITEM,
  DELETE_ITEM,
} = require("../controllers/cartControllers");
const router = Router();

router.get("/cart/:id", GET_CART_ITEMS);
router.post("/cart/:id", ADD_CART_ITEM);
router.delete("/cart/:userId/:itemId", DELETE_ITEM);

module.exports = router;
