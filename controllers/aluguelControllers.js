const Aluguel = require('../models/Aluguel'); // Importe o modelo de aluguel

// Controller para criar um novo aluguel
const createAluguel = async (req, res) => {
  try {
    const novoAluguel = new Aluguel(req.body);
    await novoAluguel.save();
    res.status(201).json(novoAluguel);
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível criar o aluguel' });
  }
};

// Controller para listar todos os aluguéis
const listAlugueis = async (req, res) => {
  try {
    const alugueis = await Aluguel.find();
    res.status(200).json(alugueis);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os aluguéis' });
  }
};

// Controller para obter um aluguel por ID
const getAluguelById = async (req, res) => {
  try {
    const aluguel = await Aluguel.findById(req.params.aluguelId);
    if (!aluguel) {
      res.status(404).json({ error: 'Aluguel não encontrado' });
    } else {
      res.status(200).json(aluguel);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o aluguel' });
  }
};

// Controller para atualizar um aluguel por ID
const updateAluguel = async (req, res) => {
  try {
    const aluguelAtualizado = await Aluguel.findByIdAndUpdate(req.params.aluguelId, req.body, { new: true });
    if (!aluguelAtualizado) {
      res.status(404).json({ error: 'Aluguel não encontrado' });
    } else {
      res.status(200).json(aluguelAtualizado);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o aluguel' });
  }
};

// Controller para excluir um aluguel por ID
const deleteAluguel = async (req, res) => {
  try {
    const aluguel = await Aluguel.findByIdAndRemove(req.params.aluguelId);
    if (!aluguel) {
      res.status(404).json({ error: 'Aluguel não encontrado' });
    } else {
      res.status(204).end(); // Resposta sem conteúdo (aluguel excluído com sucesso)
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o aluguel' });
  }
};

module.exports = {
  createAluguel,
  listAlugueis,
  getAluguelById,
  updateAluguel,
  deleteAluguel,
};
