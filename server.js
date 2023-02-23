const path = require("path");
const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");
const CITY_NAME = "montreal";

// Création des fichiers JSONs
(async () => {
    // Permet de récupérer les données météo pour 5 jours
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}&lang=fr`;
    const { data: forecast } = await axios.get(forecastUrl);

    // Conversion de la data en Json avec indentation
    weather = JSON.stringify({ data: [forecast] }, null, 2);

    // Ecriture du fichier .json
    fs.writeFile(
        "./frontend/static/js/json/meteoPrevision.json",
        weather,
        (err) => {
            if (err) throw err;
        }
    );

    // Permet de récupérer la donné météo sur le moment
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}&lang=fr`;
    const { data: current } = await axios.get(currentUrl);

    // Ajout de l'heure dans la data et ajoute le 0 quand le chiffre est encore dans les dixaines, sinon ex: 15h 3min et 12sec (il manque le 0 de 03 min)
    const today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    const time = h + ":" + m + ":" + s + " ";
    current.time = time;

    // Conversion de la data en Json avec indentation
    weather = JSON.stringify({ data: [current] }, null, 2);

    // Ecriture du fichier .json
    fs.writeFile("./frontend/static/js/json/meteo.json", weather, (err) => {
        if (err) throw err;
    });
})();

app.use(
    "/static",
    express.static(path.resolve(__dirname, "frontend", "static"))
);

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/weather", function (req, res) {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/about", function (req, res) {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(PORT || 4001, () => {
    console.log("Server running on PORT", PORT);
});
