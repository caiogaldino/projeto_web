// Login.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../service/api';
import './Login.css'

const checkAuthentication = () => {
  const token = localStorage.getItem('token');
  return !!token; // Retorna true se houver um token, indicando autenticação
};

const Login = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = checkAuthentication();

    if (isAuthenticated) {
      // O usuário está autenticado, execute as ações necessárias
      console.log('Usuário autenticado');
      alert(`Você já está logado!`);
      navigateTo('/');
    } else {
      // O usuário não está autenticado, redirecione para a página de login, por exemplo
      console.log('Usuário não autenticado, redirecionando para o login');
      navigateTo('/Login');
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await api.post('http://localhost:3000/login', {
        email,
        senha,
      });

      // Manipule a resposta (por exemplo, salve o token no estado global)
      console.log('Token de autenticação:', response.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`

      // Armazene o token em localStorage
      localStorage.setItem('token', response.data.token);
      alert(`Bem-vindo, ${email}!`);
      navigateTo('/');

      const { token } = response.data;
      setToken(token);
      setAuthenticated(true);

    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className='containerRegister'>
      <h1>Login</h1>
      <br />
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
      <button onClick={handleLogin} className='button'>Entrar</button>
    </div>
  );
};

export default Login;
