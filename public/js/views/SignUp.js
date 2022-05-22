import AbstractView from "./AbstractView"

export default class SignUp extends AbstractView{
    constructor() {
        super()
    }

    async getHtml() {
        return `
        <div class="main__sign-in">
            <label>Username</label>   
            <input type="text" placeholder="Username" name="username" class="main__sign-form" required>  
            <label>Email</label>   
            <input type="email" placeholder="Email" name="email" class="main__sign-form">  
            <label>Password</label>   
            <input type="password" placeholder="Password" name="password" class="main__sign-form" required>  
            <button type="submit" id="sign-up-button" class="main__button-ref">Sign up</button>
        </div>
        `;
    }
}