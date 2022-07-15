const express = require("express");
const router = express.Router();
const inventoryRoutes = require("./inventory");
router.use("/InventoryTransfer", inventoryRoutes);
module.exports = router;
