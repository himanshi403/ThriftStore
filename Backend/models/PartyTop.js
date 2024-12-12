const mongoose = require('mongoose');

const PartyTopSchema = new mongoose.Schema({
  src: { type: String, required: true },
  price: { type: Number, required: true }
});

const PartyTop = mongoose.model('PartyTop', PartyTopSchema);

module.exports = PartyTop;
