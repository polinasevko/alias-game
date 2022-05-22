import AbstractView from "./AbstractView"

export default class SignIn extends AbstractView{
    constructor() {
        super()
    }

    async getHtml() {
        return  `
        <div class="main__sign-in">
            <label for="username">Username</label>   
            <input type="text" placeholder="Username" name="username" class="main__sign-form" required>  
            <label>Password</label>   
            <input type="password" placeholder="Password" name="password" class="main__sign-form" required>  
            <button type="submit" id="sign-in-button" class="main__button-ref">Sign in</button>
        </div>
        `;
    }
}