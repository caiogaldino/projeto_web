import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../service/api';
import './Reservas.css'



// Função para verificar a autenticação
const checkAuthentication = () => {
  const token = localStorage.getItem('token');
  return !!token; // Retorna true se houver um token, indicando autenticação
};


function App() {
  const navigateTo = useNavigate();
  useEffect(() => {
    const isAuthenticated = checkAuthentication();

    if (isAuthenticated) {
      // O usuário está autenticado, execute as ações necessárias
      console.log('Usuário autenticado');
    } else {
      // O usuário não está autenticado, redirecione para a página de login, por exemplo
      console.log('Usuário não autenticado, redirecionando para o login');
      alert(`Você precisa estar logado para solicitar uma reserva`);
      navigateTo('/Login');
    }
  }, []);

  const [modelo, setModelosMoto] = useState([]);
  const [modeloSelecionado, setModeloSelecionado] = useState('');
  
    useEffect(() => {
      // Função para obter modelos de moto do backend
      const obterModelosMoto = async () => {
        try {
          const resposta = await api.get('http://localhost:3000/motos'); // Substitua pela sua rota real
          setModelosMoto(resposta.data);
        } catch (erro) {
          console.error('Erro ao obter modelos de moto:', erro);
        }
      };
  
      obterModelosMoto();
    }, []); // Executa apenas uma vez durante a montagem do componente
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Enviar dados para o backend, incluindo o ID do modelo de moto selecionado
      try {
        await api.post('http://localhost:3000/reservas', {
          objetoId: 'idDoSeuObjeto',
          modeloMotoId: modeloSelecionado,
      });
      console.log('Modelo de moto associado com sucesso!');
      } catch (erro) {
      console.error('Erro ao associar modelo de moto:', erro);
      }
    };
  
  
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  
  const handleReserva = async () => {
    try {
      // Substitua 'SUA_API_ENDPOINT' pelo endpoint real da sua API
      const response = await api.post('http://localhost:3000/reservas', {
        modeloSelecionado,
        dataInicio,
        dataFim,
        
      }, 
      );

      console.log('Reserva criada:', response.data);
      // Limpar o formulário após a reserva ser criada com sucesso
      setModeloSelecionado('');
      setDataInicio('');
      setDataFim('');
      navigateTo('/confirm');
      
    } catch (error) {
      console.error('Erro ao criar reserva:', error);
    }
  };

  return (
    <div className='containerRegister'>
      <h1>Criar Reserva</h1>
      <br />
      <form onSubmit={handleSubmit}>
      <label className='formGroup'>
        <strong>Selecione um modelo de moto:</strong>
        <select value={modeloSelecionado} onChange={(e) => setModeloSelecionado(e.target.value)}>
          <option value="">Selecione...</option>
          {modelo.map((modelo) => (
            <option key={modelo.id} value={modelo.id}>
              {modelo.modelo}
            </option>
          ))}
        </select>
      </label>
      
      </form>
      <label className='formGroup'>
        <strong>Data Início:</strong>
        <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
      </label>
      <label className='formGroup'>
        <strong>Data Fim:</strong>
        <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
      </label>
      <br />

      <button onClick={handleReserva} className='button'>Reservar</button>
    </div>
  );
}

export default App;

