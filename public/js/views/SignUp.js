import AbstractView from "./AbstractView"
import {User} from "../models/User.js";
import {setUser} from "../firebase/fdatabase.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";

export default class SignUp extends AbstractView{
    constructor() {
        super()
    }

    async signUpClick(auth, database){
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            const user = auth.currentUser
            const localUser = new User();
            localUser.email = email;
            localUser.id = user.uid;
            localUser.username = username;
            localUser.commandsStats = [];
            sessionStorage.setItem("User", JSON.stringify(localUser))
            setUser(localUser)
            console.log("localUser", localUser)
            
            setUser(localUser).catch((error) => {
              console.log("Sign Up:", error.message);
            });
        })
    }

    async getHtml() {
        return `
        <div class="main__sign-in">
            <label>Username</label>   
            <input type="text" placeholder="Username" name="username" id="username" class="main__sign-form" required>  
            <label>Email</label>   
            <input type="email" placeholder="Email" name="email" id="email" class="main__sign-form">  
            <label>Password</label>   
            <input type="password" placeholder="Password" name="password" id="password" class="main__sign-form" required>  
            <button type="submit" id="sign-up-button" class="main__button-ref">Sign up</button>
        </div>
        `;
    }
}