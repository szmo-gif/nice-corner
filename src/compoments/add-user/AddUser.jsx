import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../../firebase';
import { doc, setDoc } from "firebase/firestore";
import '../../pages/login/login.css';
import './add-user.css';

function AddUser({ show, handleClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        username,
        email
      });
      setMessage("Utilisateur créé avec succès !");
    } catch (error) {
      setMessage(error.message);
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
          <input
            type="email"
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
