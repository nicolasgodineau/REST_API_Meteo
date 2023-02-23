import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
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

        const weather = await getData("/static/js/views/meteoPrevision.json");
        console.log("data:", weather);

        return `
                <img class="h-[1000px] max-w-max" src="./static/img/Ipad.webp" alt="">
        
                <div class="absolute top-[50px] left-[367px] h-[730px] w-[550px] p-2 flex flex-col">
                    <nav class="w-full p-2 flex items-center justify-center gap-3">
                        <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link" data-link
                            aria-current="page">Now</a>
                        <a href="/weather"
                            class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium nav__link"
                            data-link>Forecast</a>
                        <a href="/about"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium nav__link"
                            data-link>About</a>
                    </nav>
                    <div class="h-full flex flex-col items-center justify-center gap-10">
                    <div class="flex flex-col items-center justify-center">
                        <img class="h-16" src="/static/img/icon/${
                            weather.data[0].list[0].weather[0].icon
                        }.svg" alt="">
                        <p class="text-white text-m font-medium">${weather.data[0].list[0].main.temp.toFixed(
                            0
                        )}</p>
                        <p class="text-white text-sm font-medium">${
                            weather.data[0].list[0].weather[0].description
                        }</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <img class="h-16" src="/static/img/icon/${
                        weather.data[0].list[1].weather[0].icon
                    }.svg" alt="">
                        <p class="text-white text-m font-medium">${weather.data[0].list[1].main.temp.toFixed(
                            0
                        )}</p>
                        <p class="text-white text-sm font-medium">${
                            weather.data[0].list[1].weather[0].description
                        }</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <img class="h-16" src="/static/img/icon/${
                        weather.data[0].list[2].weather[0].icon
                    }.svg" alt="">
                        <p class="text-white text-m font-medium">${weather.data[0].list[2].main.temp.toFixed(
                            0
                        )}</p>
                        <p class="text-white text-sm font-medium">${
                            weather.data[0].list[2].weather[0].description
                        }</p>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                    <img class="h-16" src="/static/img/icon/${
                        weather.data[0].list[3].weather[0].icon
                    }.svg" alt="">
                        <p class="text-white text-m font-medium">${weather.data[0].list[3].main.temp.toFixed(
                            0
                        )}</p>
                        <p class="text-white text-sm font-medium">${
                            weather.data[0].list[3].weather[0].description
                        }</p>
                    </div>
                </div>
        
                        `;
    }
}
