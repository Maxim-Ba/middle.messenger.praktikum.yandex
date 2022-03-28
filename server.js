const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const port = process.env.PORT || PORT;

app.use(express.static("./dist"));
// app.use("*", express.static("./dist"));
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
