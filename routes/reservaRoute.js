const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaControllers'); 
const verifyToken = require('../models/Reserva'); // Importe o middleware


router.post('/reservas', reservaController.createReserva);

router.get('/reservas', reservaController.listReservas);

router.get('/reservas/:reservaId', reservaController.getReservaById);

router.put('/reservas/:reservaId', reservaController.updateReserva);

router.delete('/reservas/:reservaId', reservaController.deleteReserva);

module.exports = router;
