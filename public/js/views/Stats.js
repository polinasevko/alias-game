import AbstractView from "./AbstractView"

export default class Stats extends AbstractView{
    constructor() {
        super()
    }

    async handle(){
        let table = document.querySelector(".main__scroll-table")
        let user = JSON.parse(sessionStorage.getItem("User"))
        let rows_count = user.commandsStats.length
        for (let i = 0; i < rows_count; i++) {
            let row = document.createElement("tr")
            let command_cell = document.createElement("td")
            let score_cell = document.createElement("td")
            command_cell.innerHTML = user.commandsStats[i.toString()].name
            score_cell.innerHTML = user.commandsStats[i.toString()].score
            row.appendChild(command_cell);
            row.appendChild(score_cell);
            table.appendChild(row)
        }
    }

    async getHtml() {
        return  `
        <div class="main__stats">
        <div class="main__scroll-table"> 
            <table>
                <tr>
                    <th>Command</th>
                    <th>Score</th>
                </tr>
            </table>
        </div>

        <a href="/" id="back-button" class="main__button-ref" data-link>Back</a>
    </div>
        `;
    }
}