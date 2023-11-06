const User = require('../models/User'); // Importe o modelo de usuário
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

/*// Controller para criar um novo usuário
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível criar o usuário' });
  }
};

// Controller para listar todos os usuários
const listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os usuários' });
  }
};

// Controller para obter um usuário por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o usuário' });
  }
};

// Controller para atualizar um usuário por ID
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!updatedUser) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

// Controller para excluir um usuário por ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.userId);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(204).end(); // Resposta sem conteúdo (usuário excluído com sucesso)
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
};

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
};*/




// criar um novo usuário (registro)
const createUser = async (req, res) => {
  // Validação dos dados do usuário usando express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newUser = new User(req.body);
    await newUser.save();
    const token = newUser.generateToken(); // Gere um token JWT para o novo usuário
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(400).json({ error: 'Não foi possível criar o usuário' });
  }
};

// fazer login e obter um token JWT
const loginUser = async (req, res) => {
  // Validação dos dados do usuário usando express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, senha } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Email inválido' });
    }

    const isMatch = await user.comparePassword(senha);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = user.generateToken();
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: 'Erro ao fazer login' });
  }
};
// listar todos os usuários
const listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os usuários' });
  }
};

// buscar usuário por ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o usuário' });
  }
};

// atualizar um usuário por ID
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!updatedUser) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

// excluir um usuário por ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.userId);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.status(204).json(); // Resposta sem conteúdo (usuário excluído com sucesso)
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
};

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser, 
};