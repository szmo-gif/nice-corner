import React, { useState } from 'react';
import Modal from '../../compoments/add-user/AddUser';
import './login.css';

function Login() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    
    <form className='login-form'>
      <h1>Connexion</h1>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input type="text" id="username" name="username" required />
        
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />
        
        <button type="submit">Se connecter</button>
        <a href="#" onClick={handleOpen}>Créer un compte</a>
      <Modal show={showModal} handleClose={handleClose} />
      </form>
    
  );
}

export default Login;
