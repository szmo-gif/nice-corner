import { db } from './firebase';  // Importez votre configuration Firebase
import { collection, addDoc, getDocs } from "firebase/firestore";

// Ajouter un Ping à Firestore
export const addPingToFirestore = async (pingData) => {
  try {
    const docRef = await addDoc(collection(db, "pings"), pingData);
    console.log("Ping ajouté avec l'ID : ", docRef.id);
  } catch (e) {
    console.error("Erreur lors de l'ajout du ping : ", e);
  }
};

// Récupérer tous les Pings depuis Firestore
export const fetchPings = async () => {
  const querySnapshot = await getDocs(collection(db, "pings"));
  const pingsArray = [];
  querySnapshot.forEach((doc) => {
    pingsArray.push({ id: doc.id, ...doc.data() });
  });
  return pingsArray;
};
