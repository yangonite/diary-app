// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// connectFirestoreEmulator(db, "127.0.0.1", 8080);

const isLocal = () => {
  const localHostnames = ["localhost", "127.0.0.1"]; // Add more local development hostnames if needed
  const hostname = window.location.hostname;
  return localHostnames.includes(hostname);
};

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = getAuth(app);
export const db = getFirestore(app);

// Usage
if (isLocal()) {
  console.log("Running on local machine");
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(db, "http://127.0.0.1:8080");
  console.log("Successfully connected to local emulators");
}

export default app;
