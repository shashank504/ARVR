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
const db = firebase.firestore(); // Use Firestore

// Register function
function register() {
  // Get the form values
  var fullName = document.getElementById('full_name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Validate email format
  var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(email)) {
    alert("Invalid email format. Please enter a Gmail address.");
    return;
  }

  // Check if any field is empty
  if (!fullName || !email || !password) {
    alert("All fields must be filled out.");
    return;
  }

  // Firebase Authentication: Create a new user
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      // User successfully registered
      var user = userCredential.user;

      // Save user data in Firestore
      db.collection("users").doc(user.uid).set({
          fullName: fullName,
          email: email,
          uid: user.uid
      })
      .then(() => {
          alert("User registered successfully and data saved!");
      })
      .catch((error) => {
          alert("Error saving data: " + error.message);
      });
  })
  .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
  });
}
