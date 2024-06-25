import React, { useState } from 'react';
import '../../pages/login/login.css';
import './add-user.css';
import axios from 'axios';

function AddUser({ show, handleClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
      });

      setMessage(response.data);
    } catch (error) {
      setMessage(error.response.data);
    }
  };


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit} className='login-form'>
          <label htmlFor="username">Nom d'utilisateur:</label>
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          
          <label htmlFor="email">Email:</label>
          <input type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
          />
          
          <label htmlFor="password">Mot de passe:</label>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          
          <button type="submit">Créer</button>
          <button type="button" onClick={handleClose} className='close'>&times;</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </div>
  );
}

export default AddUser;
