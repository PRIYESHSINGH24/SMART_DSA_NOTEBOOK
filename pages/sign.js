import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

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
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('terms');
    const passwordToggle = document.querySelector('.password-toggle');

    passwordToggle.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        passwordToggle.classList.toggle('fa-eye');
        passwordToggle.classList.toggle('fa-eye-slash');
    });

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (!fullName || !email || password.length < 8 || password !== confirmPassword || !termsCheckbox.checked) {
            alert('Please fill in all fields correctly.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                fullName: fullName,
                email: email,
                createdAt: new Date().toISOString()
            });

            alert('Account created successfully!');
            window.location.href = "profile.html";  // Redirect after successful signup
        } catch (error) {
            console.error("Error creating user:", error.message);
            alert(`Signup failed: ${error.message}`);
        }
    });
});
