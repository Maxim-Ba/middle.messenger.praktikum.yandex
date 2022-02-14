const express = require("express");
const app = express();
const PORT = 3000;
const port = process.env.PORT || PORT;
app.use(express.static("./dist"));
app.listen(PORT, function () {
  console.log(`Example app listening on port ${port}!`);
});
