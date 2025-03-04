// Import the Firebase modules you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-UbZi50HdHcbiWCD264YdR9tMTn-h_9c",
  authDomain: "seeblogs-e7256.firebaseapp.com",
  projectId: "seeblogs-e7256",
  storageBucket: "seeblogs-e7256.appspot.com",
  messagingSenderId: "667096101894",
  appId: "1:667096101894:web:eb6b12c3b9924387f03f87",
  measurementId: "G-L6503Z1MLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
