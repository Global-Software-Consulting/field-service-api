const express = require("express");
const path = require('path');

const routes = require("./src/routes/index");
const app = express();
app.use(express.json());

app.use("/api/v1", routes);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

module.exports = server;
