const mongoose = require('mongoose');

const aluguelSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  moto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Moto',
    required: true,
  },
  dataInicio: {
    type: Date,
    required: true,
  },
  dataFim: {
    type: Date,
    required: true,
  },
  valorTotal: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pendente', 'Confirmado', 'Concluído', 'Cancelado'],
    default: 'Pendente',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Aluguel = mongoose.model('Aluguel', aluguelSchema);

module.exports = Aluguel;
