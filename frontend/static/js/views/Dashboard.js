import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    //constructor() {
    // super();
    //9
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }
    async getHtml() {
        return `
                    <h1>Bienvenu SPA Dashboard</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas cumque haru
                    <p>
                    <a href="/posts" data-link>Voir les publications</a>
                    </p>
                `;
    }
}
