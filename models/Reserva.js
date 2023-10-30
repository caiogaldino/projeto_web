const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
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
  status: {
    type: String,
    enum: ['Pendente', 'Aprovada', 'Concluída', 'Cancelada'],
    default: 'Pendente',
  },
  valorTotal: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reserva = mongoose.model('Reserva', reservaSchema);

module.exports = Reserva;
