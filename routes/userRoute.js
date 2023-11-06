const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers'); 
 
const { body } = require('express-validator');

// Rota para registrar um novo usuário
router.post(
    '/register',
    [
      body('nome').notEmpty(),
      body('email').isEmail(),
      body('senha').isLength({ min: 6 }),
    ],
    userController.createUser
  );
  
  // Rota para fazer login e obter um token JWT
  router.post(
    '/login',
    [
      body('email').isEmail(),
      body('senha').isLength({ min: 6 }),
    ],
    userController.loginUser
  );


router.get('/users', userController.listUsers);

router.get('/users/:userId', userController.getUserById);

router.put('/users/:userId', userController.updateUser);

router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
