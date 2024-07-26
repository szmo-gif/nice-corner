import React, { useEffect, useState } from 'react';
import { signOut } from "firebase/auth";
import { auth, db } from '../../../firebase'; // Assurez-vous que le chemin est correct
import { doc, getDoc } from "firebase/firestore";
import './handle-count.css';

export default function HandleCount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        setEmail(user.email);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username);
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const handleDelete = async () => {
    const user = auth.currentUser;
    if (user) {
      await user.delete();
    }
  };

  return (
    <div className="handle-count">
      <h1>Gestion du compte</h1>
      <p>Pseudo: {username}</p>
      <p>Email: {email}</p>

      <button>Modifier mon profil</button>

      <button onClick={handleLogout}>Se déconnecter</button>

      <button onClick={handleDelete}>Supprimer mon compte</button>
    </div>
  );
}
