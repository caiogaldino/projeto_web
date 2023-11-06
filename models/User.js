const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  senha: {
    type: String,
    required: true,
    minlength: 6, 
  },
  telefone: {
    type: Number,
    required: true
  },
  dataCadastro: {
    type: Date,
    default: Date.now
  }
});

// criptografa a senha
/*userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('senha')) return next();

  try {
    const hash = await bcrypt.hash(user.senha, 10);
    user.senha = hash;
    next();
  } catch (error) {
    return next(error);
  }
});*/

// comparar senhas
userSchema.methods.comparePassword = function (senha) {
  return (senha, this.senha);
};

// gerar token JWT
userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, 'secret', {
    expiresIn: '1h', // Token expira em 1 hora
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;

