import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxWbMwPGod-qtFbycJXCdLVaTBDdNTiJk",
  authDomain: "hackathon-46b95.firebaseapp.com",
  projectId: "hackathon-46b95",
  storageBucket: "hackathon-46b95.appspot.com",
  messagingSenderId: "453519413680",
  appId: "1:453519413680:web:5cbb7ff1f9f6e7193e0675",
  measurementId: "G-CH6QL3EXKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider(app);
const Signin = signInWithEmailAndPassword(app);
export { db, auth, GoogleProvider, Signin };