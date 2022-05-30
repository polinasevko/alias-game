import AbstractView from "./AbstractView"

export default class Start extends AbstractView{
    constructor() {
        super()
    }

    async handle(){
        if(sessionStorage.length){
            await this.changeLogout()
        }
    }

    async getHtml() {
        return  `
        <div class="main__menu">
            <a href="/settings" id="settings-button" class="main__button-ref" data-link>Start</a>
            <a href="/stats" id="stats-button" class="main__button-ref" data-link>Stats</a>
        </div>
        `;
    }
}