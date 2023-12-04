import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

import start160 from '../images/start160.jpg';
import titan160 from '../images/titan160.png';
import bros160 from '../images/bros160.png';
import fz15 from '../images/fz15.jpg';
import fz25 from '../images/fz25.jpg';
import factor15 from '../images/factor15.jpg';

const motorcyclesData = [
  {
    id: 1,
    name: 'CG 160 Start',
    description: 'Descrição do Modelo 1',
    image: start160,
  },
  {
    id: 2,
    name: 'CG 160 Titan',
    description: 'Descrição do Modelo 2',
    image: titan160,
  },
  {
    id: 3,
    name: 'CG 160 Bros',
    description: 'Descrição do Modelo 3',
    image: bros160,
  },
  {
    id: 4,
    name: 'Fazer 15',
    description: 'Descrição do Modelo 4',
    image: fz15,
  },
  {
    id: 5,
    name: 'Fazer 25',
    description: 'Descrição do Modelo 5',
    image: fz25,
  },
  {
    id: 6,
    name: 'Factor 150',
    description: 'Descrição do Modelo 6',
    image: factor15,
  },
];

const Home = () => {
  return (
    <div className='bodyhome'>
      <h2>Conheça a nossa frota</h2>
      <br />
      <ul className='homeul'>
        {motorcyclesData.map((motorcycle) => (
          <li className='homeli' key={motorcycle.id}>
            
            <img className='homeimg'
              src={motorcycle.image}
              alt={`Imagem do ${motorcycle.name}`}
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            <p className='homep'><h3>{motorcycle.name}</h3></p>
            {/* Adicione um botão para a reserva ou ação desejada */}
            <button className='homebutton'>
              <Link to={`/details/${motorcycle.id}`}>Ver Detalhes</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Home;