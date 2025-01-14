import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);


// Check if Firebase is initialized
if (app) {
  console.log("Firebase has been initialized successfully");
} else {
  console.error("Firebase initialization failed");
}

// Check if Messaging is initialized
if (messaging) {
  console.log("Firebase Messaging has been initialized successfully");
} else {
  console.error("Firebase Messaging initialization failed");
}