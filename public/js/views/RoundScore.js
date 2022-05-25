import AbstractView from "./AbstractView"

export default class RoundScore extends AbstractView{
    constructor() {
        super()
    }

    async handle(){
        let gameset = JSON.parse(sessionStorage.getItem("Gameset"))
        let h2 = document.querySelector("h2")
        let indx = gameset.index
        let curr_command = gameset.commands[indx.toString()]
        h2.innerHTML = curr_command.name

        // Table of guessed and passed words
        let table = document.querySelector(".main__scroll-table")
        let rows_count = Math.max(curr_command.guessed, curr_command.passed)
        for (let i = 0; i < rows_count; i++) {
            let row = document.createElement("tr")
            let guessed_cell = document.createElement("td")
            let passed_cell = document.createElement("td")
            guessed_cell.innerHTML = curr_command.guessedWords[i] ? curr_command.guessedWords[i] : null
            passed_cell.innerHTML = curr_command.passedWords[i] ? curr_command.passedWords[i] : null
            row.appendChild(guessed_cell);
            row.appendChild(passed_cell);
            table.appendChild(row)
        }
    }

    async getHtml() {
        return  `
        <div class="main__score">
            <h2>Command name</h2>
            <div class="main__scroll-table"> 
                <table>
                    <tr>
                        <th>Confirmed</th>
                        <th>Skipped</th>
                    </tr>
                </table>
            </div>

            <a href="/intermediate_stage" class="main__button-ref" data-link>Next</a>
        `;
    }
}