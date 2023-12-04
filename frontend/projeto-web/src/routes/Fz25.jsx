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
    id: 5,
    name: 'Yamaha Fazer Fz25',
    
    image: fz25,
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

                Nova carenagem frontal, com luz de rodagem diurna de LED (DRL), deixando a motocicleta mais visível em condições de luz natural, e farol com projetor de LED de última geração, oferecendo maior amplitude de luminosidade. Lanterna traseira de LED e tomadas de ar pintadas na cor da moto, conferem um visual mais agressivo e esportivo para esta street<br />
                <br />
                <strong>Tipo de combustível:</strong> Gasolina/Etanol <br />

                <strong>Torque (Etanol):</strong> 2,1 kgf.m (6.500 rpm) <br /> 

                <strong>Torque (Gasolina):</strong> 2,1 kgf.m (6.500 rpm) <br />

                <strong>Taxa de compressão:</strong> 9,8 : 1 <br />

                <strong>Tipo:</strong> SOHC, 2 válvulas, 4 tempos, Refrigeração  a ar <br />

                <strong>Cilindros:</strong> 1 <br />

                <strong>Diâmetro X curso:</strong> 74,0 mm x 58,0 mm <br />

                <strong>Potência (Etanol):</strong> 21,5 cv (8.000 rpm) <br />

                <strong>Potência (Gasolina):</strong> 21,3 cv (8.000 rpm) <br />

                <strong>Cilindrada: </strong>249 cc <br />

                <strong>Alimentação:</strong> Injeção eletrônica                
            </p>
            {/* Adicione um botão para a reserva ou ação desejada */}
            
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Home;