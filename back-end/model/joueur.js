const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  team: { type: String, required: true },
  nationality: { type: String, required: true },
  jerseyNumber: { type: Number, required: true },
  age: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Player', playerSchema);