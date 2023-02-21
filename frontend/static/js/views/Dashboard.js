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
            <div class=" w-full h-full flex flex-col items-center justify-center gap-10 p-2">
                <h1 class="text-white uppercase">Dashbord</h1>
                <form action="/weather" method="POST">
                <input type="text" name="city" required />
                <input class="text-white" type="submit" value="Submit" />
            </form>
            </div>
        </div>
                
                `;
    }
}
