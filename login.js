// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDZO-2yUHziwbOUpxPqNqjR2n55H89HqNM",
    authDomain: "arrealworld-51cbb.firebaseapp.com",
    projectId: "arrealworld-51cbb",
    storageBucket: "arrealworld-51cbb.appspot.com",
    messagingSenderId: "1033126650105",
    appId: "1:1033126650105:web:b37f448a18f2995a19c228"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();

// Login function
function login() {
    // Get the form values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Check if email and password fields are filled
    if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
    }

    // Firebase Authentication: Sign in the user
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // User successfully logged in
        alert("Login successful!");
        
        // Redirect to index.html
        window.location.href = 'index.html';
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        // Specific error handling for invalid email or password
        if (errorCode === 'auth/invalid-email') {
            alert("Invalid email format. Please enter a valid email address.");
        } else if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
            alert("Invalid email or password. Please check your credentials and try again.");
        } else {
            alert("Error: " + errorMessage);
        }
    });
}
