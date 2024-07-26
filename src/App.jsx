import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase'; // Assurez-vous que le chemin est correct
import Home from './pages/home/Home';
import Header from './compoments/header/Header';
import Footer from './compoments/footer/Footer';
import './App.css';
import Login from './pages/login/Login';
import HandleCount from './pages/handleCount/HandleCount';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null); // Met à jour l'état utilisateur à null
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/handleCount" /> : <Login />} />
          <Route path="/handleCount" element={user ? <HandleCount handleLogout={handleLogout} /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
