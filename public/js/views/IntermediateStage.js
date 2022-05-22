import AbstractView from "./AbstractView"

export default class IntermediateStage extends AbstractView{
    constructor() {
        super()
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