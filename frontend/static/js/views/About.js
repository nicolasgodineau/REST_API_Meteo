import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About");
    }
    async getHtml() {
        return `
        <nav class="w-full p-2 flex items-center justify-center gap-3">
        <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link" data-link
            aria-current="page">Now</a>
        <a href="/weather"
            class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium nav__link"
            data-link>Forecast</a>
        <a href="/about"
            class="bg-gray-900 text-white underline px-3 py-2 rounded-md text-sm font-medium nav__link"
            data-link>About</a>
    </nav>
    <div class="h-full w-full flex flex-col items-center justify-center gap-10">
        <h1 class="text-white uppercase">About this page</h1>
        <p class="text-white p-3">Built with Node.js and powered by the OpenWeather API. <br><br>
        With Node.js, we can build scalable and maintainable.  <br><br>
        The OpenWeather API integration allows us to provide real-time weather updates.</p>
    </div>
</div>

                `;
    }
}
