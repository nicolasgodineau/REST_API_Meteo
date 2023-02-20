import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    //constructor() {
    // super();
    //9
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }
    async getHtml() {
        return `
                <h1>TEST</h1>
                h2 = message
                <p>Gérez votre confidentialité et votre configuration</p>
                `;
    }
}
