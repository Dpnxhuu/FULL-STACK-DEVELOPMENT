const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Successfully connected on port number 3000.");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello Google!</h1>");
});
