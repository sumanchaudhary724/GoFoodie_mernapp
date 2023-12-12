const express = require("express");
const app = express();
const port = 8000;
const mongoDB = require("./db.js");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
