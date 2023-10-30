const express = require('express');
const router = express.Router();
const aluguelController = require('../controllers/aluguelControllers'); 

router.post('/alugueis', aluguelController.createAluguel);

router.get('/alugueis', aluguelController.listAlugueis);

router.get('/alugueis/:aluguelId', aluguelController.getAluguelById);

router.put('/alugueis/:aluguelId', aluguelController.updateAluguel);

router.delete('/alugueis/:aluguelId', aluguelController.deleteAluguel);

module.exports = router;
