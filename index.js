const express = require("express");
const routes = require("./src/routes/index");
const app = express();
app.use(express.json());

app.use("/api/v1", routes);
const port = process.env.PORT || 3200;
const server = app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

module.exports = server;
