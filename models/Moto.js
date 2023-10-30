const mongoose = require('mongoose');

const motoSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  placa: {
    type: String,
    unique: true,
    required: true,
  },
  quilometragem: {
    type: Number,
    default: 0,
  },
  precoAluguel: {
    type: Number,
    required: true,
  },
  disponibilidade: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Moto = mongoose.model('Moto', motoSchema);

module.exports = Moto;
