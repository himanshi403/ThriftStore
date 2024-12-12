const express = require('express');
const Trouser = require('../models/Trouser');
const router = express.Router();

// Get all Trousers
router.get('/', async (req, res) => {
  try {
    const trousers = await Trouser.find();
    res.json(trousers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
