// // src/firebase.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXX",          // ← your values
//   authDomain: "your-project-12345.firebaseapp.com",        // ← your values
//   projectId: "your-project-12345",                         // ← your values
//   storageBucket: "your-project-12345.appspot.com",         // ← your values
//   messagingSenderId: "1234567890",                         // ← your values
//   appId: "1:1234567890:web:abcdef1234567890"               // ← your values
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);


// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your config (this is correct – keep it exactly as you have it)
const firebaseConfig = {
  apiKey: "AIzaSyBKb-Gfd1OBJ7EdYc2qPQQZrCC5KwdGl6c",
  authDomain: "nytmate-fb84d.firebaseapp.com",
  projectId: "nytmate-fb84d",
  storageBucket: "nytmate-fb84d.firebasestorage.app",
  messagingSenderId: "988310703116",
  appId: "1:988310703116:web:cf6ab178bead7dc055f229",
  measurementId: "G-2HSQENN7VN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the things we actually need
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


export default app;
// Optional: you can delete Analytics completely if you want (not needed for auth)