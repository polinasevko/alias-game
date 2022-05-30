import AbstractView from "./AbstractView"
import {getUser} from "../firebase/fdatabase.js"
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";


export default class SignIn extends AbstractView{
    constructor() {
        super()
    }


    async signInClick(auth){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password)
        .then(async () => {
            await getUser();
        })
        .catch((error) => {
            console.log("Sign in error:", error.message);
            alert("You are not logged in");
        });
    }

    async getHtml() {
        return  `
        <div class="main__sign-in">
            <label for="email">Email</label>   
            <input type="email" placeholder="Email" name="email" id="email" class="main__sign-form" required>   
            <label>Password</label>   
            <input type="password" placeholder="Password" name="password" id="password" class="main__sign-form" required>  
            <button type="submit" id="sign-in-button" class="main__button-ref">Sign in</button>
        </div>
        `;
    }
}