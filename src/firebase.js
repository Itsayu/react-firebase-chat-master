// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbguWG23CukpdIIrwfRyTjofxdSFVEp4",
  authDomain: "firechat-abcfd.firebaseapp.com",
  databaseURL: "https://firechat-abcfd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "firechat-abcfd",
  storageBucket: "firechat-abcfd.appspot.com",
  messagingSenderId: "703131626373",
  appId: "1:703131626373:web:815b17f81dfc270eeab2ec",
  measurementId: "G-S9JD37YGET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
