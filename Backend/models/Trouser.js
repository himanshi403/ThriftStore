const mongoose = require('mongoose');

const TrouserSchema = new mongoose.Schema({
  src: { type: String, required: true },
  price: { type: Number, required: true }
});

const Trouser = mongoose.model('Trouser', TrouserSchema);

module.exports = Trouser;
