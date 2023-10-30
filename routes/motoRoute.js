const express = require('express');
const router = express.Router();
const motoController = require('../controllers/motoControllers');

router.post('/motos', motoController.createMoto);

router.get('/motos', motoController.listMotos);

router.get('/motos/:motoId', motoController.getMotoById);

router.put('/motos/:motoId', motoController.updateMoto);

router.delete('/motos/:motoId', motoController.deleteMoto);

module.exports = router;
