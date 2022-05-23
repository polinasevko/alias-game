import { initializeApp} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js"
import {getDatabase, set, ref, get, child, onValue} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js"

export const firebaseConfig = {
    apiKey: "AIzaSyD9VQoz52JlobIDf60tzkXR0lUtxwXISEI",
    authDomain: "alias-game-bf65e.firebaseapp.com",
    databaseURL: "https://alias-game-bf65e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "alias-game-bf65e",
    storageBucket: "alias-game-bf65e.appspot.com",
    messagingSenderId: "613335452117",
    appId: "1:613335452117:web:8e11dcebd76bcf4e2d155c"
  };

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getDatabase()
// const storage = getStorage(app)
