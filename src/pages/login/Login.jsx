import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase'; 
import Modal from '../../compoments/add-user/AddUser';
import './login.css';

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Connexion réussie !");
      navigate('/handleCount');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      <form className='login-form' onSubmit={handleLogin}>
        <h1>Connexion</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Se connecter</button>
        {message && <p>{message}</p>}
        <a href="#" onClick={handleOpen}>Créer un compte</a>
      </form>
      <Modal show={showModal} handleClose={handleClose} />
    </>
  );
}

export default Login;
