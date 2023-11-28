import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { api } from '../service/api';
import './Reservas.css'

function App() {
  
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
        Selecione um modelo de moto:
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
        Data Início:
        <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
      </label>
      <label className='formGroup'>
        Data Fim:
        <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
      </label>
      <br />

      <button onClick={handleReserva}>Reservar</button>
    </div>
  );
}

export default App;

