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
router.get("/warehouseList", (req, res) => {
  return res.status(200).json(readJsonFile("warehouseList.json"));
});

router.get("/serviceorders/:id", (req, res) => {
  return res.status(200).json(readJsonFile("serviceorders.json"));
});
router.get("/warehouseServiceOrders/:id", (req, res) => {
  return res.status(200).json(readJsonFile("warehouseServiceOrders.json"));
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

router.get("/cu", (req, res) => {
  return res.status(200).json(readJsonFile("cu.json"));
});

router.get("/unpostedMaterial/:id", (req, res) => {
  return res.status(200).json(readJsonFile("unpostedMaterial.json"));
});

router.get("/history/:id", (req, res) => {
  return res.status(200).json(readJsonFile("history.json"));
});

router.get("/submittedTransfers", (req, res) => {
  return res.status(200).json(readJsonFile("submittedTransfers.json"));
});

router.get("/equipmentTransferHistory/:id", (req, res) => {
  return res.status(200).json(readJsonFile("equipmentTransferHistory.json"));
});

router.post("/equipmentTransfer", (req, res) => {
  setTimeout(() => {
    return res.status(200).json({
      documentData: null,
      elapsed: "276",
      errorCode: 0,
      errorMessage: "Equipment Transfer successful.",
      success: true,
    });
  }, 1000);
});

router.post("/projectInventoryTransfer", (req, res) => {
  setTimeout(() => {
    return res.status(200).json({
      documentData: null,
      elapsed: "276",
      errorCode: 0,
      errorMessage: "Equipment Transfer successful.",
      success: true,
    });
  }, 1000);
});
router.post("/setDefaultCrewID", (req, res) => {
  setTimeout(() => {
    return res.status(200).json({
      documentData: null,
      elapsed: "3",
      errorCode: 0,
      errorMessage: "",
      success: true,
    });
  }, 1000);
});
router.post("/submitPicklist", (req, res) => {
  const { jobBoxLocation, status, workOrderId, pickList } = req.body;
  setTimeout(() => {
    return res.status(200).json({
      success: true,
      message: "Picklist submitted successfully.",
      errorCode: 0,
      documentData: null,
      elapsed: "105", // ms or simulated
    });
  }, 1000);
});
router.get("/inventoryPickList", (req, res) => {
  return res.status(200).json(readJsonFile("inventoryPicklist.json"));
});

module.exports = router;
