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
        async function getData(url) {
            console.log(url);
            const response = await fetch(url);
            return response.json();
        }

        const data = await getData("/static/js/views/meteo.json");
        console.log("data:", data);
        return `
                    
                    <img class="h-[1000px] fixed" src="./static/img/Ipad.png" alt="">

        <div class="absolute top-[50px] left-[408px] h-[620px] w-[466px] p-2 flex flex-col">
            <nav class="w-full p-2 flex items-center justify-center gap-3">
                <a href="/" class=" bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium nav__link" data-link
                    aria-current="page">Dashboard</a>
                <a href="/weather"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link"
                    data-link>Weather</a>
                <a href="/about"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium nav__link"
                    data-link>About</a>
            </nav>
            <div class="flex flex-col items-center gap-3">
            <p class="text-white px-3 py-2 rounded-md text-xl font-medium z-10">${data.name}</p>
            <img class="h-64" src="/static/img/${data.weather[0].icon}.svg" alt="">
            <p class="text-white px-3 py-2 rounded-md text-m font-medium">${data.weather[0].description}</p>
            <p class="text-white text-8xl font-thin z-10">${data.main.temp}\u00B0C</p>
            <small class="text-white font-thin ">Température actuelle</small>
        </div>
        </div>
                
                `;
    }
}
