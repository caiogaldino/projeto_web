const Reserva = require('../models/Reserva'); // Importe o modelo de reserva

// Controller para criar uma nova reserva
const createReserva = async (req, res) => {
  try {
    const novaReserva = new Reserva(req.body);
    await novaReserva.save();
    res.status(201).json(novaReserva);
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível criar a reserva' });
  }
};

// Controller para listar todas as reservas
const listReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as reservas' });
  }
};

// Controller para obter uma reserva por ID
const getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.reservaId);
    if (!reserva) {
      res.status(404).json({ error: 'Reserva não encontrada' });
    } else {
      res.status(200).json(reserva);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar a reserva' });
  }
};

// Controller para atualizar uma reserva por ID
const updateReserva = async (req, res) => {
  try {
    const reservaAtualizada = await Reserva.findByIdAndUpdate(req.params.reservaId, req.body, { new: true });
    if (!reservaAtualizada) {
      res.status(404).json({ error: 'Reserva não encontrada' });
    } else {
      res.status(200).json(reservaAtualizada);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a reserva' });
  }
};

// Controller para excluir uma reserva por ID
const deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndRemove(req.params.reservaId);
    if (!reserva) {
      res.status(404).json({ error: 'Reserva não encontrada' });
    } else {
      res.status(204).end(); // Resposta sem conteúdo (reserva excluída com sucesso)
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a reserva' });
  }
};

module.exports = {
  createReserva,
  listReservas,
  getReservaById,
  updateReserva,
  deleteReserva,
};
