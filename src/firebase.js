// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { SEED_DATA, seed } from "./data/seed";
// connectFirestoreEmulator(db, "127.0.0.1", 8080);

const isLocal = () => {
  const localHostnames = ["localhost", "127.0.0.1"]; // Add more local development hostnames if needed
  const hostname = window.location.hostname;
  return localHostnames.includes(hostname);
};

const app = initializeApp({
  apiKey: "AIzaSyA8V6RXyTmLl6NiIm-XVvO2lmHucI-q_s8",
  authDomain: "diaryapp-7f4cb.firebaseapp.com",
  projectId: "diaryapp-7f4cb",
  storageBucket: "diaryapp-7f4cb.appspot.com",
  messagingSenderId: "274573248778",
  appId: "1:274573248778:web:e519a294b3250b321592f3",
});
// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// });

export const auth = getAuth(app);
export const db = getFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});

// Usage
if (isLocal()) {
  // If we are in the local mode connect to firebase emulators
  console.log("Running on local machine");
  connectAuthEmulator(auth, "http://127.0.0.1:9099");

  // connectFirestoreEmulator(db, "http://127.0.0.1:8080");
  connectFirestoreEmulator(db, "http://127.0.0.1", 8080);

  console.log("Successfully connected to local emulators");

  // populate test data by seeding them
  // seed();
}
