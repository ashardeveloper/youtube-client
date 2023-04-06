import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQdgL0btLII37VgOO41SdqY1txrO8fYnI",
  authDomain: "video-af14c.firebaseapp.com",
  projectId: "video-af14c",
  storageBucket: "video-af14c.appspot.com",
  messagingSenderId: "322212155350",
  appId: "1:322212155350:web:e5ea7df365cf6a84d55e77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
