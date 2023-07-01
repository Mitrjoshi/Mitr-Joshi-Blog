import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;

const firebaseConfig = {
  apiKey: { apiKey },
  authDomain: { authDomain },
  projectId: "blog-996cf",
  storageBucket: "blog-996cf.appspot.com",
  messagingSenderId: "822052733596",
  appId: "1:822052733596:web:acdf8073155c982e812359",
  measurementId: "G-NJ1YJ6N0ZM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
