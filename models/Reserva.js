const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const reservaSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  },
  modeloSelecionado: {
    type: String,
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

// Middleware para verificar o token JWT
/*const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }
    req.userId = decoded.id; // Você pode armazenar o ID do usuário no objeto de solicitação para uso posterior
    next();
  });
};*/

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const token = authorizationHeader.split(' ')[1]; // Extrai o token JWT do cabeçalho de autorização

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido' });
    }
    //req.userId = decoded.id; // Armazena o ID do usuário no objeto de solicitação (req) para uso posterior
    next(); // Avança para a próxima middleware ou rota
  });
};

module.exports = verifyToken;


const Reserva = mongoose.model('Reserva', reservaSchema);

//module.exports = verifyToken;
module.exports = Reserva;
