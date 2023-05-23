import React, { useState } from 'react';
import Home from './Home/Home';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário com o nome de usuário e senha fornecidos
    console.log('Nome de usuário:', username);
    console.log('Senha:', password);
    // Você também pode enviar os dados para um servidor para realizar a autenticação
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nome de usuário:</label><br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div><br />
        <label htmlFor="password">Senha:</label><br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div><br />
      <Link to={'/home'}>
      <button type="submit">Cadastrar</button>
      </Link><br/>
      <div className='cadastro'>
        <Link to={'/cadastro'}> Click aqui</Link> para Criar uma conta
      </div>
    </form>
  );
}

export default LoginForm;