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
        console.log(this.params.id);

        async function getData(url) {
            console.log(url);
            const response = await fetch(url);
            return response.json();
        }

        const data = await getData("/static/js/views/meteo.json");
        console.log("data:", data);

        return `
        <img class="h-[1000px] fixed" src="./static/img/Ipad.png" alt="">

        <div class="absolute top-[50px] left-[408px] h-[620px] w-[466px] p-2 flex flex-col gap-9">
            <nav class="w-full p-2 flex items-center justify-center gap-3">
                <a href="/" class=" text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link" data-link
                    aria-current="page">Dashboard</a>
                <a href="/weather"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium nav__link"
                    data-link>Weather</a>
                <a href="/about"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link"
                    data-link>About</a>
            </nav>
            <div class=" w-full h-full flex flex-col items-center justify-center p-2">
                <section class="w-full h-full flex flex-col items-center justify-center">
                    <div class="w-full flex justify-between">
                        <p class="text-white px-3 py-2 rounded-md text-xl font-medium z-10">${data.name}</p>
                        <p class="text-white px-3 py-2 rounded-md text-sm font-medium z-10">${data.time}</p>
                    </div>
                    <img class="h-64" src="/static/img/${data.weather[0].icon}.svg" alt="">
                    <p class="text-white px-3 py-2 rounded-md text-m font-medium">${data.weather[0].description}</p>
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <p class="text-white px-3 py-2 rounded-md text-sm font-medium z-10">Temp min.
                                ${data.main.temp_max}\u00B0C</p>
                            <p class="text-white px-3 py-2 rounded-md text-sm font-medium z-10">Temp max.
                                ${data.main.temp_min}\u00B0C</p>
                        </div>
                        <div class="flex flex-col items-center gap-3">
                            <p class="text-white text-8xl font-thin z-10">${data.main.temp}\u00B0C</p>
                            <small class="text-white font-thin ">Température actuelle</small>
                        </div>
                    </div>
                </section>
            </div>
        </div>

                `;
    }
}
