import AbstractView from "./AbstractView"
import { navigateTo } from "../index.js"

export default class Logout extends AbstractView{
    constructor() {
        super()
    }

    async handle(){
        sessionStorage.clear()
        navigateTo("/")
        await this.changeLogin()
    }
}