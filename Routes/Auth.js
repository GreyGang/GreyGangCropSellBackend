const { Router } = require("express");
const { SIGNUP, LOGIN, GET_USER } = require("../controllers/authControllers");
const router = Router();
const auth = require("../middleware/auth");

router.post("/register", SIGNUP);
router.post("/login", LOGIN);
router.get("/user", auth, GET_USER);

module.exports = router;
