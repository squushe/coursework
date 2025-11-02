const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.get("/signup", (req, res) => {
  res.send("Hello World!");
});
app.get("/login", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
