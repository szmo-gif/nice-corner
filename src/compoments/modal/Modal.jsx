import React, { useState } from 'react';

const Modal = ({ position, onClose, onSave }) => {
  const [title, setTitle] = useState('');

  const handleSave = () => {
    const pingData = {
      title,
      position,
    };
    onSave(pingData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Ajouter un Ping</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre du Ping"
        />
        <button onClick={handleSave}>Enregistrer</button>
        <button onClick={onClose}>Annuler</button>
      </div>
    </div>
  );
};

export default Modal;
