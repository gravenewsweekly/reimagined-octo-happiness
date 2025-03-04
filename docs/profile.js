import { auth } from "./firebase-config.js";
import { updateProfile } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

document.getElementById('updateBtn').addEventListener('click', () => {
    const newUsername = document.getElementById('newUsername').value;
    updateProfile(auth.currentUser, {
        displayName: newUsername
    }).then(() => {
        alert("Profile Updated!");
        window.location.href = "home.html";
    }).catch((error) => {
        alert(error.message);
    });
});
