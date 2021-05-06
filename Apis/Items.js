const { Router } = require("express");
const {
  GET_ITEMS,
  POST_ITEMS,
  UPDATE_ITEMS,
  DELETE_ITEMS,
} = require("../controllers/ItemController");
const router = Router();

router.get("/items", GET_ITEMS);
router.post("/items", POST_ITEMS);
router.put("/items/:id", UPDATE_ITEMS);
router.delete("/items/:id", DELETE_ITEMS);

module.exports = router;
