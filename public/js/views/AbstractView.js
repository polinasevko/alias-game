export default class AbstractView{
    constructor() {}

    async getHtml() {
        return ""
    }

    async handle(){
        return null
    }

    async saveChanges(gameset){
        sessionStorage.setItem("Gameset", JSON.stringify(gameset))
    }
}