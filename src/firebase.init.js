import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

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

export const auth = getAuth(app);
export default auth;
