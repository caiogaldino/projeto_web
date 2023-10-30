const Moto = require('../models/Moto'); // Importe o modelo de moto

// Controller para criar uma nova moto
const createMoto = async (req, res) => {
  try {
    const novaMoto = new Moto(req.body);
    await novaMoto.save();
    res.status(201).json(novaMoto);
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível criar a moto' });
  }
};

// Controller para listar todas as motos
const listMotos = async (req, res) => {
  try {
    const motos = await Moto.find();
    res.status(200).json(motos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar as motos' });
  }
};

// Controller para obter uma moto por ID
const getMotoById = async (req, res) => {
  try {
    const moto = await Moto.findById(req.params.motoId);
    if (!moto) {
      res.status(404).json({ error: 'Moto não encontrada' });
    } else {
      res.status(200).json(moto);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar a moto' });
  }
};

// Controller para atualizar uma moto por ID
const updateMoto = async (req, res) => {
  try {
    const motoAtualizada = await Moto.findByIdAndUpdate(req.params.motoId, req.body, { new: true });
    if (!motoAtualizada) {
      res.status(404).json({ error: 'Moto não encontrada' });
    } else {
      res.status(200).json(motoAtualizada);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a moto' });
  }
};

// Controller para excluir uma moto por ID
const deleteMoto = async (req, res) => {
  try {
    const moto = await Moto.findByIdAndRemove(req.params.motoId);
    if (!moto) {
      res.status(404).json({ error: 'Moto não encontrada' });
    } else {
      res.status(204).end(); // Resposta sem conteúdo (moto excluída com sucesso)
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir a moto' });
  }
};

module.exports = {
  createMoto,
  listMotos,
  getMotoById,
  updateMoto,
  deleteMoto,
};
