const express = require('express');
const PartyTop = require('../models/PartyTop');
const router = express.Router();

// Get all Party Tops
router.get('/', async (req, res) => {
  try {
    const partyTops = await PartyTop.find();
    res.json(partyTops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
