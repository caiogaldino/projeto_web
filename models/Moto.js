const mongoose = require('mongoose');


const motoSchema = new mongoose.Schema({
  modelo: {
    type: String,
    required: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Moto = mongoose.model('Moto', motoSchema);

module.exports = Moto;
