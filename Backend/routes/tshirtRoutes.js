const express = require('express');
const Tshirt = require('../models/Tshirt');
const router = express.Router();

// Get all T-shirts
router.get('/', async (req, res) => {
  try {
    const tshirts = await Tshirt.find();
    res.json(tshirts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
