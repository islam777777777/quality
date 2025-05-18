// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2giAO4jfvP5vG-3hWwkr52ubEU6g4ZQg",
  authDomain: "qualitynew-15f27.firebaseapp.com",
  projectId: "qualitynew-15f27",
  storageBucket: "qualitynew-15f27.appspot.com",
  messagingSenderId: "522874838891",
  appId: "1:522874838891:web:77551dae205b309819b62e",
  measurementId: "G-Z4ZRV894W5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Configure settings first
if (window.location.hostname === "localhost") {
  db.settings({
    host: "localhost:8080",
    ssl: false,
    merge: true
  });
} else {
  db.settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
    merge: true
  });
}

// Make db globally available
window.db = db;

// Try to enable persistence with multi-tab support
db.enablePersistence({
  synchronizeTabs: true  // Enable shared access across tabs
}).catch((err) => {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence already enabled in another tab
    console.log('Persistence already enabled in another tab, continuing normally');
  } else if (err.code == 'unimplemented') {
    // The current browser doesn't support persistence
    console.warn('This browser does not support offline persistence');
  }
});

// Initialize Auth
window.auth = firebase.auth();
window.googleProvider = new firebase.auth.GoogleAuthProvider();

// Log when setup is complete
console.log("Firebase setup complete");

// Create a promise that resolves when Firestore is ready
window.firestoreReady = Promise.resolve();
