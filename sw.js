/*const cacheName = 'firebase-data-cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/quality.css',
  '/js.js',
  '/WhatsApp Image 2025-04-07 at 04.07.53_1d6a33ed.jpg',
  '/WhatsApp Image 2025-04-07 at 04.07.54_197dafed.jpg'
];

// تخزين الملفات عند التثبيت
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// تحديث الكاش وحذف النسخ القديمة عند التفعيل
self.addEventListener('activate', (e) => {
  const cacheWhitelist = [cacheName]; // قائمة الكاش المسموح بها

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (!cacheWhitelist.includes(cache)) {
            return caches.delete(cache); // حذف الكاش القديم
          }
        })
      );
    })
  );
});

// جلب الملفات من الكاش لو مفيش نتc
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response; // رجع البيانات لو في كاش
      }

      // لو مفيش كاش، حاول جلب البيانات من الشبكة
      return fetch(e.request).catch((err) => {
        // لو جلب البيانات فشل (في حالة عدم وجود إنترنت)
        console.error('Fetch failed:', err);
        // ممكن تضيف هنا رسالة خطأ أو شيء بديل بدل من صفحة الأوفلاين
        return new Response('No internet connection. Please try again later.', {
          status: 503, // حالة HTTP 503 (خدمة غير متاحة)
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});

self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
});*/