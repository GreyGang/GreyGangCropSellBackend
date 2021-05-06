require("dotenv/config");

const { DB_CONNECTION } = require("./Utils/DB_CONNECTION");
DB_CONNECTION(); // database connection

const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "GREY GANG BACKEND",
  });
});

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log("http://localhost:4200");
});