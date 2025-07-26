// ✅ All imports go first
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// ✅ Then disable GA in dev
if (window.location.hostname === "localhost") {
  window['ga-disable-G-YKW5KVJHSW'] = true;
}

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCcXRwkUa57YyoJtOSf4Hhn0736E3Mq-6c",
  authDomain: "netflixgpt-ead46.firebaseapp.com",
  projectId: "netflixgpt-ead46",
  storageBucket: "netflixgpt-ead46.firebasestorage.app",
  messagingSenderId: "634018020225",
  appId: "1:634018020225:web:f14d041baff536751fc680",
  measurementId: "G-YKW5KVJHSW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
