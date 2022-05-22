import AbstractView from "./AbstractView"

export default class RoundScore extends AbstractView{
    constructor() {
        super()
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