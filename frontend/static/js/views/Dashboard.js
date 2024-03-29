import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Weather Now");
    }
    async getHtml() {
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }

        const weather = await getData("/static/js/json/meteo.json");

        return `

            <nav class="w-full p-2 flex items-center justify-center gap-3">
                <a href="/" class="bg-gray-900 text-white underline px-3 py-2 rounded-md text-sm font-medium nav__link" data-link
                    >Now</a>
                <a href="/weather"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link"
                    data-link aria-current="page">Forecast</a>
                <a href="/about"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium nav__link"
                    data-link>About</a>
            </nav>
            <div class=" w-full h-full flex flex-col items-center justify-between p-2">
                    <div class="w-full flex justify-between">
                        <p class="text-white px-3 py-2 rounded-md text-xl font-medium z-10">${
                            weather.data[0].name
                        }</p>
                        <p class="text-white px-3 py-2 rounded-md text-sm font-medium z-10">${
                            weather.data[0].time
                        }</p>
                    </div>
                    <img class="h-64" src="/static/img/icon/${
                        weather.data[0].weather[0].icon
                    }.svg" alt="">
                    <p class="text-white px-3 py-2 rounded-md text-m font-medium">${weather.data[0].weather[0].description.toUpperCase()}</p>
                    <div class="w-full flex items-center justify-between">
                    
                        <div>
                            <p class="text-white px-3 py-2 rounded-md text-sm font-medium z-10">Temp min.
                                ${weather.data[0].main.temp_min.toFixed(
                                    0
                                )}\u00B0C</p>
                            <p class="text-white px-3 py-2 rounded-md text-sm font-medium z-10">Temp max.
                            ${weather.data[0].main.temp_max.toFixed(
                                0
                            )}\u00B0C</p>
                        </div>
                        <div class="flex flex-col items-center gap-3">
                            <p class="text-white text-8xl font-thin z-10">${weather.data[0].main.temp.toFixed(
                                0
                            )}\u00B0C</p>
                            <small class="text-white font-thin ">Température actuelle</small>
                        </div>
                    </div>
            </div>
        </div>

                `;
    }
}
