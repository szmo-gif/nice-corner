import React, { useState, useEffect } from 'react';
import MapComponent from '../../compoments/map/Map';
import { auth } from '../../../firebase'; // Importer l'authentification Firebase
import { onAuthStateChanged } from "firebase/auth";
import { addPingToFirestore, fetchPings } from '../../../fireBaseService'; // Ces fonctions devraient être dans un fichier séparé

const Home = () => {
  const [pings, setPings] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Vérifier l'état de connexion de l'utilisateur
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    // Récupérer les pings au chargement de la page
    const loadPings = async () => {
      const fetchedPings = await fetchPings();
      setPings(fetchedPings);
    };

    loadPings();
  }, []);

  const addPing = async (pingData) => {
    await addPingToFirestore(pingData);
    setPings([...pings, pingData]);
  };

  return (
    <div>
      <MapComponent isLoggedIn={isLoggedIn} pings={pings} addPing={addPing} />
    </div>
  );
};

export default Home;
