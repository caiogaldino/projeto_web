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
    id: 4,
    name: 'Yamaha Fazer Fz15',
    
    image: fz15,
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

                Com design esportivo e itens de série inacreditáveis que tornam a pilotagem ágil e fácil, a nova FAZER FZ15 ABS provoca admiração por onde passa. A carenagem dessa moto street é robusta e imponente, com destaque às linhas agressivas do conjunto óptico, tanque e entradas de ar, que carregam a atitude da família FAZER FZ.<br />
                <br />
                <strong>Tipo de combustível:</strong> Gasolina/Etanol <br />

                <strong>Torque (Etanol):</strong> 1,3 kgf.m (5.500 rpm) <br />

                <strong>Torque (Gasolina):</strong> 1,3 kgf.m (5.500 rpm) <br />

                <strong>Taxa de compressão:</strong> 9,6 : 1 <br />

                <strong>Tipo:</strong> SOHC, 2 válvulas, 4 tempos, Refrigeração a ar <br />

                <strong>Cilindros:</strong> 1 <br /> 

                <strong>Diâmetro X curso:</strong> 57,3 mm x 57,9 mm <br />

                <strong>Potência (Etanol):</strong> 12,4 cv (7.500 rpm) <br />

                <strong>Potência (Gasolina):</strong> 12,2 cv (7.500 rpm) <br />

                <strong>Cilindrada:</strong> 149 cc  <br />

                <strong>Alimentação:</strong> Injeção eletrônica <br />

            </p>
            {/* Adicione um botão para a reserva ou ação desejada */}
            
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Home;