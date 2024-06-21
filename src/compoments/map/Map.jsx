// src/MapComponent.js

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correction de l'icône de marqueur manquante
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const [position, setPosition] = useState([48.866667, 2.333333]); // Position par défaut
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
          setLoading(false);
        },
        (error) => {
          console.error("Erreur de géolocalisation : ", error);
          setLoading(false);
        }
      );
    } else {
      console.error("La géolocalisation n'est pas supportée par ce navigateur.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Chargement de la position...</div>; // Afficher un message de chargement pendant que nous obtenons la position
  }

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Vous êtes ici.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
