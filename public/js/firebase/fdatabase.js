import {
set,
ref,
onValue
} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";
import { auth, database } from "./firebase.js";
import { User } from "../models/User.js";

export async function setUser(user) {
    const currUser = auth.currentUser;
    let userRef = ref(database, `users/${currUser.uid}`);
    set(userRef, {
        email: user.email,
        username: user.username,
        commandsStats: user.commandsStats,
        }).catch((error) => {
        console.log("Sign Up:", error.message);
    });
}

export async function getUser() {
    const user = auth.currentUser;
    const userRef = ref(database, `users/${user.uid}`);
    const localUser = new User();
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();

      localUser.username = data.username;
      localUser.email = data.email;
      localUser.id = user.uid;
      localUser.commandsStats = data.commandsStats;
      sessionStorage.setItem("User", JSON.stringify(localUser));
    })
}  
