import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from '../modal/Modal'; // Importez votre composant de modal ici

const MapComponent = ({ isLoggedIn, pings, addPing }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        if (isLoggedIn) {
          setSelectedPosition(e.latlng);
          setModalOpen(true);
        } else {
          alert("Vous devez être connecté pour ajouter un ping.");
        }
      },
    });
    return null;
  };

  const handleAddPing = (pingData) => {
    addPing(pingData);
    setModalOpen(false);
  };

  return (
    <>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClickHandler />
        {pings.map((ping, index) => (
          <Marker key={index} position={ping.position} />
        ))}
      </MapContainer>
      {modalOpen && (
        <Modal
          position={selectedPosition}
          onClose={() => setModalOpen(false)}
          onSave={handleAddPing}
        />
      )}
    </>
  );
};

export default MapComponent;
