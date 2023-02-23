import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Weather forecast");
    }
    async getHtml() {
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }

        const weather = await getData("/static/js/json/meteoPrevision.json");
        // permert de convertir l'heure Unix timestamp en heure classique
        let tHeure = [];
        for (let index = 0; index < 4; index++) {
            let heure;
            heure = weather.data[0].list[index].dt;
            heure = new Date(heure * 1000);
            heure = heure.toLocaleTimeString("fr-FR");
            tHeure.push(heure);
        }

        return `
                    <nav class="w-full p-2 flex items-center justify-center gap-3">
                        <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link" data-link
                            aria-current="page">Now</a>
                        <a href="/weather"
                            class="bg-gray-900 text-white underline px-3 py-2 rounded-md text-sm font-medium nav__link"
                            data-link>Forecast</a>
                        <a href="/about"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium nav__link"
                            data-link>About</a>
                    </nav>
                    <div class="h-full flex flex-col items-center justify-center gap-10">
                    <div class="flex flex-col items-center justify-center">
                    <p class="text-white text-sm font-medium">${tHeure[0]}</p>
                        <img class="h-16" src="/static/img/icon/${
                            weather.data[0].list[0].weather[0].icon
                        }.svg" alt="">
                        
                        <p class="text-white text-m font-medium">${weather.data[0].list[0].main.temp.toFixed(
                            0
                        )}</p>
                        <p class="text-white text-sm font-medium">${weather.data[0].list[0].weather[0].description.toUpperCase()}</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <p class="text-white text-sm font-medium">${tHeure[1]}</p>
                    <img class="h-16" src="/static/img/icon/${
                        weather.data[0].list[1].weather[0].icon
                    }.svg" alt="">
                        <p class="text-white text-m font-medium">${weather.data[0].list[1].main.temp.toFixed(
                            0
                        )}</p>
                        <p class="text-white text-sm font-medium">${weather.data[0].list[1].weather[0].description.toUpperCase()}</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <p class="text-white text-sm font-medium">${tHeure[2]}</p>
                    <img class="h-16" src="/static/img/icon/${
                        weather.data[0].list[2].weather[0].icon
                    }.svg" alt="">
                        <p class="text-white text-m font-medium">${weather.data[0].list[2].main.temp.toFixed(
                            0
                        )}</p>
                        <p class="text-white text-sm font-medium">${weather.data[0].list[2].weather[0].description.toUpperCase()}</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <p class="text-white text-sm font-medium">${tHeure[3]}</p>
                    <img class="h-16" src="/static/img/icon/${
                        weather.data[0].list[3].weather[0].icon
                    }.svg" alt="">
                        <p class="text-white text-m font-medium">${weather.data[0].list[3].main.temp.toFixed(
                            0
                        )}</p>
                        <p class="text-white text-sm font-medium">${weather.data[0].list[3].weather[0].description.toUpperCase()}</p>
                    </div>
                </div>
        
                        `;
    }
}
