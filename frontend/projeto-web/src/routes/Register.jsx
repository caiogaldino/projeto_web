import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../service/api';
import './Register.css'

  const Register = () => {
    const navigateTo = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
  
    const handleRegister = async () => {
      try {
        const response = await api.post('http://localhost:3000/register', {
          nome,
          email,
          senha,
          telefone
        });
  
        // Exiba uma mensagem de sucesso ou redirecione para a tela de login
        console.log('Usuário registrado com sucesso:', response.data);
        alert(`Sua conta foi criada com sucesso, ${nome}!`);
        navigateTo('/');
      } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        // Trate outros erros de registro, se necessário
      }
    };
  
    return (
      <div className='containerRegister'>
        <h3>Cadastre-se para aproveitar as funcionalidades do site</h3>
        <div className='formGroup'>
          <label><strong>Nome:</strong> </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label><strong>Email:</strong></label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label><strong>Senha:</strong></label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label><strong>Telefone:</strong></label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <button onClick={handleRegister} className='button'>Cadastrar</button>
      </div>
    );
};

export default Register;