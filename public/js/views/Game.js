import AbstractView from "./AbstractView"

export default class Game extends AbstractView{
    constructor() {
        super()
    }

    async getHtml() {
        return  `
        <div class="main__game">

            <div class="main__time-animation">
                <div class="main__cylon_eye"></div>
            </div>

            <button class="main__arrow-button" type="submit">
                <img src="../../assets/img/svg/arrow-up.svg" alt="arrow-up" class="main__arrow-pic">
            </button>

            <section class="main__word-section">
                <p class="main__word">Word</p>
            </section>

            <button class="main__arrow-button" type="submit">
                <img src="../../assets/img/svg/arrow-down.svg" alt="arrow-down" class="main__arrow-pic">
            </button>
        </div>
        `;
    }
}