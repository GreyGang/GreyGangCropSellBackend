const { Router } = require("express");
const {
  SIGN_UP,
  LOGIN,
  GET_USER,
  AUTH,
} = require("../Controllers/AuthController");
const router = Router();
const auth = require("../Middleware/Auth");

router.get("/", AUTH);
router.post("/register", SIGN_UP);
router.post("/login", LOGIN);
router.get("/user", auth, GET_USER);

module.exports = router;
