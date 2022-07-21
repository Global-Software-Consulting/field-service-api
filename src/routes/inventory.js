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
router.get("/equipmentlist/:id", (req, res) => {
  return res.status(200).json(readJsonFile("equipmentList.json"));
});
router.get("/truckMap/:id", (req, res) => {
  return res.status(200).json(readJsonFile("truckMap.json"));
});
router.get("/crewList", (req, res) => {
  return res.status(200).json(readJsonFile("crewList.json"));
});

router.get("/serviceorders/:id", (req, res) => {
  return res.status(200).json(readJsonFile("serviceorders.json"));
});

router.get("/crewNotes/:id", (req, res) => {
  return res.status(200).json(readJsonFile("crewNotes.json"));
});
router.get("/itemList", (req, res) => {
  return res.status(200).json(readJsonFile("itemList.json"));
});
router.get("/topItemList", (req, res) => {
  return res.status(200).json(readJsonFile("topItemList.json"));
});
router.get("/picklist/:id", (req, res) => {
  return res.status(200).json(readJsonFile("picklist.json"));
});



router.get("/unpostedMaterial/:id", (req, res) => {
  return res.status(200).json(readJsonFile("unpostedMaterial.json"));
});

router.get("/history/:id", (req, res) => {
  return res.status(200).json(readJsonFile("history.json"));
});

router.post("/equipmentTransfer", (req, res) => {
  setTimeout(() => {
    return res.status(200).json({"documentData": null, "elapsed": "276", "errorCode": 0, "errorMessage": "Equipment Transfer successful.", "success": true});
  }, 1000);
});

router.post("/projectInventoryTransfer", (req, res) => {
  setTimeout(() => {
    return res.status(200).json({"documentData": null, "elapsed": "276", "errorCode": 0, "errorMessage": "Equipment Transfer successful.", "success": true});
  }, 1000);
});
router.post("/setDefaultCrewID", (req, res) => {
setTimeout(() => {
  return res.status(200).json({"documentData": null, "elapsed": "3", "errorCode": 0, "errorMessage": "", "success": true});
}, 1000);
});


module.exports = router;
