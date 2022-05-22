import AbstractView from "./AbstractView"

export default class Stats extends AbstractView{
    constructor() {
        super()
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