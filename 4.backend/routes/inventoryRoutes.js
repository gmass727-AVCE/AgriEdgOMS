const express = require("express");
const router = express.Router();
const Inventory = require("../models/Inventory");

// Get Inventory
router.get("/", async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add Inventory Item
router.post("/", async (req, res) => {
  try {
    const item = new Inventory(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
