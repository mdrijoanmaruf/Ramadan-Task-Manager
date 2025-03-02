import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAemuOinNs0mcRmyXQ6-EbDqYTvxblvA4M",
  authDomain: "ramadan-task-manager.firebaseapp.com",
  projectId: "ramadan-task-manager",
  storageBucket: "ramadan-task-manager.firebasestorage.app",
  messagingSenderId: "384680665358",
  appId: "1:384680665358:web:9c4bd2e360ce9b3219f75f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, db };