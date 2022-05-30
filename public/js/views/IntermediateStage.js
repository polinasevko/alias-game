import AbstractView from "./AbstractView"

export default class IntermediateStage extends AbstractView{
    constructor() {
        super()
    }

    async handle(){
        let gameset = JSON.parse(sessionStorage.getItem("Gameset"))
        let indx = gameset.index
        let winner = null
        let winner_score = null 
        let curr_command = gameset.commands[indx.toString()]
        // Check if command scores enoigh points to end the game
        if(curr_command.score >= gameset.wordNum){
            gameset.endGame = true
        }
        // If one of commands has enough points to end the game
        // and cycle of 1 round where all commands have competed is full
        // then finish the game
        if(gameset.endGame && gameset.index === gameset.commands.length - 1){
            let button = document.querySelector(".main__button-ref")
            let user = JSON.parse(sessionStorage.getItem("User"))
            button.innerHTML = "Finish"
            button.href = "/"
            user.commandsStats = user.commandsStats.concat(gameset.commands)         
            user.commandsStats.sort((a, b) => b.score - a.score)
            sessionStorage.setItem("User", JSON.stringify(user))
            winner_score = Math.max(...gameset.commands.map(obj => obj.score))
            winner = gameset.commands.find(obj => obj.score === winner_score)
        }

        //Table with commands scores
        let table = document.querySelector(".main__scroll-table")
        let rows_count = gameset.commands.length
        for (let i = 0; i < rows_count; i++) {
            let row = document.createElement("tr")
            let command_cell = document.createElement("td")
            let score_cell = document.createElement("td")
            command_cell.innerHTML = gameset.commands[i].name
            score_cell.innerHTML = gameset.commands[i].score
            if (JSON.stringify(gameset.commands[i]) == JSON.stringify(winner)){
                command_cell.style.backgroundColor = "#852D44" 
                score_cell.style.backgroundColor = "#852D44"      
            }
            console.log(winner)
            row.appendChild(command_cell);
            row.appendChild(score_cell);
            table.appendChild(row)
        } 
        let game_button = document.querySelector('.main__button-ref')
        game_button.addEventListener('click', () => {
            if (++gameset.index == gameset.commands.length){
                gameset.index = 0
            }
            curr_command.guessed = 0
            curr_command.passed = 0
            curr_command.guessedWords = []
            curr_command.passedWords = []
            this.saveChanges(gameset)
        })
    }

    async getHtml() {
        return  `
        <div class="main__intermediate-stage">
            <div class="main__scroll-table"> 
                <table>
                    <tr>
                        <th>Command</th>
                        <th>Score</th>
                </table>
            </div>

            <a href="/game" class="main__button-ref" data-link>Round</a>
        </div>
        `;
    }
}