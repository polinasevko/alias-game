import AbstractView from "./AbstractView"

export default class Settings extends AbstractView{
    constructor() {
        super()
    }

    async getHtml() {
        return  `
        <div class="main__settings">
        <h3>Commands</h3>
        <ul class="main__commands-list">
            <li class="main__commands-item">Command one</li>
            <li class="main__commands-item">Command two</li>
        </ul>

        <form class="main__add-command-form">
            <input type="text" class="main__input-text" autocomplete="off" name="item" placeholder="New command">
            <input type="submit" class="main__input-button" value="Add">
        </form>

        <div class="main__output">
            <h3>Number of words:</h3>
            <output id="outputWordsNumber" class="main__slider-output" name="output-words-number" for="inputWordsCount">60</output>
        </div>
        <input id="inputWordsCount" class="main__slider-input" type="range" min="10" max="100" value="60" step="10" name="words" oninput="outputWordsNumber.value=inputWordsCount.value;">
        
        <div class="main__output">
            <h3>Time:</h3>
            <output id="outputTime" class="main__slider-output" name="output-time" for="inputTime">60</output>
        </div>
        <input id="inputTime" class="main__slider-input" type="range" min="10" max="100" value="60" step="10" name="time" oninput="outputTime.value=inputTime.value;">
        
        <form method="post" id="select-dictionary">
            <select class="main__select" required>
                <option>Select dictionary</option>
                <option value="Classy sassy">Classy sassy</option>
            </select>
        </form>

        <a href="/game" id="game-button" class="main__button-ref" data-link>Start</a>
        `;
    }
}