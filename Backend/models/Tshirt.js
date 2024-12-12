const mongoose = require('mongoose');

const TshirtSchema = new mongoose.Schema({
  src: { type: String, required: true },
  price: { type: Number, required: true }
});

const Tshirt = mongoose.model('Tshirt', TshirtSchema);

module.exports = Tshirt;
