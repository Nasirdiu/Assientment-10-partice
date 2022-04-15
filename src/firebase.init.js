// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoTEnWeSYZrqYLndcLj0UN3DNulQrOKfk",
  authDomain: "module-all-recap.firebaseapp.com",
  projectId: "module-all-recap",
  storageBucket: "module-all-recap.appspot.com",
  messagingSenderId: "887563239333",
  appId: "1:887563239333:web:332a6da74a3ae85106b24c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
