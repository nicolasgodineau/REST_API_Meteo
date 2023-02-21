/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./frontend/static/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                ipad: "url('./frontend/static/img/Ipad.png')",
            },
        },
    },
    plugins: [],
};
