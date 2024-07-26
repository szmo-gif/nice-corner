// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD3RMDc3NWNfse2jS6Lk8eWs3ax6Y3t2E",
  authDomain: "nice-corner.firebaseapp.com",
  projectId: "nice-corner",
  storageBucket: "nice-corner.appspot.com",
  messagingSenderId: "752941395606",
  appId: "1:752941395606:web:adbffb1e452bdbac675cb7",
  measurementId: "G-W5SEE3DYR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
