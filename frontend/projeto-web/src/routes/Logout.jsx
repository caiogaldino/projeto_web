import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css'

const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    return !!token; // Retorna true se houver um token, indicando autenticação
};


const handleLogout = () => {
    // Limpe o token do local storage
    localStorage.removeItem('token');
  
    // Outras ações de logout, como redirecionar para a página de login
    // ou redefinir o estado do componente, se necessário
  };



const Logout = () => {
    const navigateTo = useNavigate();

    useEffect(() => {
        const isAuthenticated = checkAuthentication();
    
        if (isAuthenticated) {
          // O usuário está autenticado, execute as ações necessárias
          console.log('Usuário autenticado');
          
        } else {
          // O usuário não está autenticado, redirecione para a página de login, por exemplo
          console.log('Usuário não autenticado, redirecionando para o login');
          alert(`Não foi possível sair, pois você não está logado.`);
          navigateTo('/Login');
        }
      }, []);

  const handleLogout = () => {
    // Implemente a lógica de logout
    localStorage.removeItem('token');
    // Outras ações de logout, se necessário
    console.log('Usuário saiu');
    alert(`Você saiu`);
    navigateTo('/Login');
  };

  return (
    <div className='containerRegister'>
        <div>
            Tem certeza que deseja sair da sua conta? <br />
            Para confirmar clique no botão "Sair" abaixo.
        </div>
      
      <button onClick={handleLogout} className='button'>Sair</button>
    </div>
  );
};

export default Logout;
