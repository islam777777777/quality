// تكوين Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB2giAO4jfvP5vG-3hWwkr52ubEU6g4ZQg",
  authDomain: "qualitynew-15f27.firebaseapp.com",
  projectId: "qualitynew-15f27",
  storageBucket: "qualitynew-15f27.appspot.com",
  messagingSenderId: "522874838891",
  appId: "1:522874838891:web:77551dae205b309819b62e",
  measurementId: "G-Z4ZRV894W5"
};

// تهيئة Firebase
firebase.initializeApp(firebaseConfig);

// تهيئة Firestore
window.db = firebase.firestore();

// تكوين إعدادات Firestore
if (window.location.hostname === "localhost") {
  // استخدام محاكي Firestore أثناء التطوير
  window.db.settings({
    host: "localhost:8080",
    ssl: false
  }, { merge: true });
} else {
  // استخدام الإعدادات الافتراضية للإنتاج
  window.db.settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
  }, { merge: true });
}

// تمكين الاستمرارية غير المتصلة (يجب أن تكون بعد الإعدادات)
window.db.enablePersistence()
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      console.error('تم فتح علامات تبويب متعددة، يمكن تمكين الاستمرارية في علامة تبويب واحدة فقط في كل مرة.');
    } else if (err.code === 'unimplemented') {
      console.error('المتصفح الحالي لا يدعم الاستمرارية.');
    }
  });

// تهيئة المصادقة وجعلها عالمية
window.auth = firebase.auth();
window.googleProvider = new firebase.auth.GoogleAuthProvider();

// تكوين استمرارية المصادقة
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .catch((error) => {
    console.error("خطأ في استمرارية المصادقة:", error);
  });

// اختبار الاتصال وحالة المصادقة
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("تم الاتصال بـ Firebase والمصادقة بنجاح!");
  } else {
    console.log("تم الاتصال بـ Firebase، في انتظار المصادقة");
  }
});