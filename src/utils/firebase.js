// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJSRBPH8ARXIc-Wimgv2VmgfxiNPQccVM",
  authDomain: "netflix-gpt-84a64.firebaseapp.com",
  projectId: "netflix-gpt-84a64",
  storageBucket: "netflix-gpt-84a64.firebasestorage.app",
  messagingSenderId: "777006782322",
  appId: "1:777006782322:web:cdccb563557f908628afeb",
  measurementId: "G-VV48W8TSK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()