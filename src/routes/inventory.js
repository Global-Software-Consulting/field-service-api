const express = require("express");
const fs = require("fs");
const path = require("path");

const readJsonFile = (fileName) => {
  const filePath = path.join(__dirname, `../../api/${fileName}`);
  let data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const router = express.Router();
router.get("/equipmentlist", (req, res) => {
  return res.status(200).json(readJsonFile("equipmentList.json"));
});
module.exports = router;
