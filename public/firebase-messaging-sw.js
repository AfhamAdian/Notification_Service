// Here i will handle the part where i show, 
// the arriving notification from firebase in frontend

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBWhnvFN0cWnqa5zwODOCrUVakg_tKVeCI",
  authDomain: "notification-service-86b5b.firebaseapp.com",
  projectId: "notification-service-86b5b",
  storageBucket: "notification-service-86b5b.firebasestorage.app",
  messagingSenderId: "533690384808",
  appId: "1:533690384808:web:4012537465303a11971d9d",
  measurementId: "G-DPXGJ844R3",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});