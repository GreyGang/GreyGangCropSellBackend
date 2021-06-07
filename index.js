require("dotenv/config");

const { DB_CONNECTION } = require("./Utils/DB_CONNECTION");
DB_CONNECTION(); // database connection

const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

require("./Models/User");
require("./Models/Item");

app.get("/", (req, res) => {
  res.json({
    message: "GREY GANG BACKEND",
    ip_address: req.connection.remoteAddress,
  });
});

app.use("/auth", require("./Routes/Auth"));
app.use("/items", require("./Routes/Item"));

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log("http://localhost:4200");
});
