const express = require("express");
const router = express.Router();
const inventoryRoutes = require("./inventory");
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Apis running successfully",
  });
});

router.use("/InventoryTransfer", inventoryRoutes);
module.exports = router;
