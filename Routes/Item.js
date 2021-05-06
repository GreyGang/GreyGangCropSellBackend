const { Router } = require("express");
const {
  GET_ITEM,
  POST_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
} = require("../controllers/itemControllers");
const router = Router();

router.get("/items", GET_ITEM);
router.post("/items", POST_ITEM);
router.put("/items/:id", UPDATE_ITEM);
router.delete("/items/:id", DELETE_ITEM);

module.exports = router;
