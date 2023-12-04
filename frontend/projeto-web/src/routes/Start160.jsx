import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Start160.css'

import start160 from '../images/start160.jpg';
import titan160 from '../images/titan160.png';
import bros160 from '../images/bros160.png';
import fz15 from '../images/fz15.jpg';
import fz25 from '../images/fz25.jpg';
import factor15 from '../images/factor15.jpg';

const motorcyclesData = [
  {
    id: 1,
    name: 'Honda CG 160 Start',
    
    image: start160,
  },
];

const Home = () => {
  return (
    <div className='containerDetails'>
      
      <ul className='detailsul'>
        {motorcyclesData.map((motorcycle) => (
          <li className='' key={motorcycle.id}>
            <h3>{motorcycle.name}</h3>
            <img className='image-container'
              src={motorcycle.image}
              alt={`Imagem do ${motorcycle.name}`}
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            <p className='p'>
              Com o baixo custo de manutenção e baixo consumo de combustível da Honda CG 160 Start, você roda mais, gastando menos. <br />
              <br />
              <strong>Tipo:</strong> OHC, Monocilíndrico 4 tempos, arrefecido a ar. <br />

              <strong>Cilindrada:</strong> 162,7 cc <br />

              <strong>Potência Máxima:</strong> 14,9 cv a 8.000 rpm <br />

              <strong>Torque Máximo:</strong> 1,40 kgf.m a 7.000 rpm <br />

              <strong>Transmissão:</strong> 5 velocidades <br />

              <strong>Sistema de Partida:</strong> Elétrico <br />

              <strong>Diâmetro x Curso:</strong> 57,3 x 63,0 mm <br />

              <strong>Relação de Compressão:</strong> 9,5 : 1 <br /> 

              <strong>Sistema Alimentação:</strong> Injeção Eletrônica PGM FI <br />

              <strong>Combustível:</strong> Gasolina <br />
            </p>
            {/* Adicione um botão para a reserva ou ação desejada */}
            
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Home;