// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../service/api';
import './Login.css'

const Login = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

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
      navigateTo('/reservas');

      const { token } = response.data;
      setToken(token);
      setAuthenticated(true);

    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
