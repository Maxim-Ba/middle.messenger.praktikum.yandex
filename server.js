const express = require("express");
<<<<<<< HEAD
const app = express();
const PORT = 3000;
app.use(express.static("./dist"));
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
=======

const app = express();
const PORT = 3000;
const port = process.env.PORT || PORT;
app.use(express.static("./dist"));
app.listen(PORT, function () {
  console.log(`Example app listening on port ${port}!`);
>>>>>>> sprint_2
});
