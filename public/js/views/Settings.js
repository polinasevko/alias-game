import AbstractView from "./AbstractView"
import {GameSet, Command} from "../GameSet"
import {navigateTo} from "../index"


export default class Settings extends AbstractView{
    constructor() {
        super()
    }

    async handle(){
        let gameset = new GameSet()
        let commands_list = document.querySelector(".main__commands-list")
        let new_command_form = document.querySelector(".main__add-command-form")
        new_command_form.addEventListener('submit', async function (e) {
            e.preventDefault()
            let new_command_name = new_command_form.elements['new_command'].value
            let new_command = new Command(new_command_name)
            let li = document.createElement("li")
            li.classList.add("main__commands-item")
            li.appendChild(document.createTextNode(new_command_name));
            commands_list.appendChild(li)
            gameset.commands.push(new_command)
        })

        let words_input = document.getElementById('inputWordsCount')
        let words_output = document.getElementById('outputWordsNumber')
        words_input.addEventListener('input', async function (e) {
            e.preventDefault()
            words_output.value = words_input.value
            gameset.wordNum = parseInt(words_input.value)
        })

        let time_input = document.getElementById('inputTime')
        let time_output = document.getElementById('outputTime')
        time_input.addEventListener('input', async function (e) {
            e.preventDefault()
            time_output.value = time_input.value
            gameset.time = parseInt(time_input.value)
        })

        let select_dict = document.querySelector('.main__select')
        let dicts = JSON.parse(localStorage.getItem("Dicts"))
        for (let dict of dicts){
            let option = document.createElement('option');
            option.value = dict.name
            option.innerHTML = dict.name
            select_dict.appendChild(option)
        }        

        select_dict.addEventListener('change', async function (e){
            gameset.dictionary = select_dict.value
            console.log(gameset)
        })

        document.getElementById('game-button').addEventListener('click', (e) =>{
            e.preventDefault()
            sessionStorage.setItem("Gameset", JSON.stringify(gameset))
            navigateTo('/game')
        })
    }

    async getHtml() {
        return  `
        <div class="main__settings">
        <h3>Commands</h3>
        <ul class="main__commands-list">
        </ul>

        <form class="main__add-command-form">
            <input type="text" class="main__input-text" autocomplete="off" name="new_command" placeholder="New command">
            <input type="submit" class="main__input-button" value="Add">
        </form>

        <div class="main__output">
            <h3>Number of words:</h3>
            <output id="outputWordsNumber" class="main__slider-output" name="output-words-number" for="inputWordsCount">60</output>
        </div>
        <input id="inputWordsCount" class="main__slider-input" type="range" min="10" max="100" value="60" step="10" name="words">
        
        <div class="main__output">
            <h3>Time:</h3>
            <output id="outputTime" class="main__slider-output" name="output-time">60</output>
        </div>
        <input id="inputTime" class="main__slider-input" type="range" min="10" max="100" value="60" step="10" name="time">
        
        <form method="post" id="select-dictionary">
            <select class="main__select" required>
                <option>Select dictionary</option>
            </select>
        </form>

        <a href="/game" id="game-button" class="main__button-ref" data-link>Start</a>
        `;
    }
}