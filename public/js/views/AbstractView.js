export default class AbstractView{
    constructor() {}

    async getHtml() {
        return ""
    }

    async handle(){
        return null
    }

    async changeLogout() {
        let ul = document.querySelector(".header__list")
        ul.innerHTML = "";
        let li = document.createElement("li");
        li.className = "header__item"
        let a = document.createElement("a")
        a.innerHTML = "Log out"
        a.className = "header__link"
        a.setAttribute("data-link", "")
        a.href = "/logout"
        li.appendChild(a)
        ul.appendChild(li);
    }

    async changeLogin() {
        let ul = document.querySelector(".header__list")
        ul.innerHTML = "";
        let li_in = document.createElement("li");
        li_in.className = "header__item"
        let li_up = document.createElement("li");
        li_up.className = "header__item"
        let a_in = document.createElement("a")
        a_in.innerHTML = "Sign in"
        a_in.className = "header__link"
        a_in.setAttribute("data-link", "")
        a_in.href = "/sign_in"
        li_in.appendChild(a_in)
        let a_up = document.createElement("a")
        a_up.innerHTML = "Sign up"
        a_up.className = "header__link"
        a_up.setAttribute("data-link", "")
        a_up.href = "/sign_up"
        li_up.appendChild(a_up)
        ul.appendChild(li_in)
        ul.appendChild(li_up)
    }

    async saveChanges(gameset){
        sessionStorage.setItem("Gameset", JSON.stringify(gameset))
    }
}