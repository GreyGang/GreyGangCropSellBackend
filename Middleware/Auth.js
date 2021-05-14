const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const { authorization } = req.headers;

  // if header present
  if (!authorization) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const token = authorization.replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = auth;
