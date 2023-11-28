const mongoose = require('mongoose');


const motoSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
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
