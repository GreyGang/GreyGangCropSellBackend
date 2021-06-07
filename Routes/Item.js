const { Router } = require("express");
const {
  GET_ITEM,
  POST_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
} = require("../Controllers/ItemController");
const auth = require("../Middleware/Auth");
const router = Router();

router.get("/getItem", GET_ITEM);
router.post("/newItem", auth, POST_ITEM);
router.put("/updateItem/:id", auth, UPDATE_ITEM);
router.delete("/deleteItem/:id", auth, DELETE_ITEM);

module.exports = router;
