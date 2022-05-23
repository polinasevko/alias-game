import {
set,
ref,
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";
import { auth, database } from "./firebase.js";

export async function setUser(user) {
const us = auth.currentUser;
let userRef = ref(database, `users/${us.uid}`);
set(userRef, {
    email: user.email,
    username: user.username
}).catch((error) => {
    console.log("Sign Up:", error.message);
});
}