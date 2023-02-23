import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }
    async getHtml() {
        return `
        <img class="h-[1000px] max-w-max" src="./static/img/Ipad.png" alt="">
        
        <div class="absolute top-[50px] left-[367px] h-[730px] w-[550px] p-2 flex flex-col">
            <nav class="w-full p-2 flex items-center justify-center gap-3">
                <a href="/" class=" text-gray-300 hover:bg-gray-700 hover:text-white  px-3 py-2 rounded-md text-sm font-medium nav__link" data-link
                    aria-current="page">Now</a>
                <a href="/weather"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link"
                    data-link>Forecast</a>
                <a href="/about"
                    class="bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium nav__link"
                    data-link>About</a>
            </nav>
            <div class=" w-full h-full flex flex-col items-center justify-center gap-10 p-2">
                <h1 class="text-white uppercase">About this page</h1>
                <p class="text-white">Built with Node.js and powered by the OpenWeather API. <br>
                With Node.js, we can build scalable and maintainable.  <br>
                The OpenWeather API integration allows us to provide real-time weather updates.</p>
            </div>
        </div>
                
                `;
    }
}
