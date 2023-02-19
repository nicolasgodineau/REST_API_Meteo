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
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }

        const data = await getData("/static/js/views/data.json");
        console.log("data:", data.weather);

        return `
                <h1>Weather</h1>
                <p>La météo est ${data.weather.temp.cur}\u00B0C</p>
                `;
    }
}
