import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdrbVTZs0LRTOONiMudrBaa8xNet79WIQ",
  authDomain: "create-account-7e671.firebaseapp.com",
  projectId: "create-account-7e671",
  storageBucket: "create-account-7e671.appspot.com",
  messagingSenderId: "558507114560",
  appId: "1:558507114560:web:a96465c7bb13d28ebddfa5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.querySelector('.password-toggle');

  // Password visibility toggle
  passwordToggle.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    passwordToggle.classList.toggle('fa-eye');
    passwordToggle.classList.toggle('fa-eye-slash');
  });

  // Login with Firebase Authentication
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in successfully:", userCredential.user);
        window.location.href = "../index.html"; // Redirect to profile page after successful login
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });
});
