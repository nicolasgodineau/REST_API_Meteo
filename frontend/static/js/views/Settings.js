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
                <h1>Settings</h1>
                <p>Gérez votre confidentialité et votre configuration</p>
                `;
    }
}
