import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Sign Up
document.getElementById('signupBtn')?.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        
        // Update Profile
        updateProfile(user, {
            displayName: username
        });

        // Store user info in Firestore
        setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email
        });

        alert("Sign-up Successful!");
        window.location.href = "home.html"; // Redirect to homepage
    })
    .catch((error) => {
        alert(error.message);
    });
});

// Login
document.getElementById('loginBtn')?.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        alert("Login Successful!");
        window.location.href = "home.html"; // Redirect to homepage
    })
    .catch((error) => {
        alert(error.message);
    });
});
