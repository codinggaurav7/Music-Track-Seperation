const express = require("express");
const app = express();
app.use(express.static('static'));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname+"/static" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});