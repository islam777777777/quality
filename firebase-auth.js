// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2giAO4jfvP5vG-3hWwkr52ubEU6g4ZQg",
    authDomain: "qualitynew-15f27.firebaseapp.com",
    databaseURL: "https://qualitynew-15f27-default-rtdb.firebaseio.com",
    projectId: "qualitynew-15f27",
    storageBucket: "qualitynew-15f27.firebasestorage.app",
    messagingSenderId: "522874838891",
    appId: "1:522874838891:web:6ec74dff415f2f9719b62e",
    measurementId: "G-E3T95MLGX8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database(); // تأكد من تهيئة قاعدة البيانات

document.addEventListener('DOMContentLoaded', () => {
    const googleLoginButton = document.getElementById('googleLogin');
    googleLoginButton.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const email = user.email.toLowerCase().trim();

                // تحقق من البريد الإلكتروني في قاعدة البيانات
                const db = database.ref("allowedEmails");
                db.child(email).get().then((snapshot) => {
                    if (snapshot.exists()) {
                        alert(`مرحباً بك ${user.displayName}!`);
                        // Redirect or enable functionality
                    } else {
                        alert(`هذا الحساب (${email}) غير مصرح له بالدخول.`);
                        auth.signOut();
                    }
                }).catch((error) => {
                    console.error("Error accessing database:", error.message);
                    alert("حدث خطأ أثناء التحقق من قاعدة البيانات.");
                });
            })
            .catch((error) => {
                console.error("Error during login:", error.message);
                alert("حدث خطأ أثناء تسجيل الدخول. الرجاء المحاولة مرة أخرى.");
            });
    });
});