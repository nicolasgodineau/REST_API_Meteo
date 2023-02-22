const path = require("path");
const express = require("express");
const app = express();
const axios = require("axios");
const fs = require("fs");
const request = require("request");
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");
const CITY_NAME = "montreal";

// Création des fichiers JSONs
(async () => {
    // Premet de récupérer la latitude et longitude de la ville
    const cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${CITY_NAME}&limit=5&appid=${API_KEY}`;
    const {
        data: [city],
    } = await axios.get(cityUrl);
    latitude = city.lat;
    longitude = city.lon;

    // Permet de récupérer les données météo pour 5 jours
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const { data: forecast } = await axios.get(forecastUrl);

    // Conversion de la data en Json avec indentation
    weather = JSON.stringify({ data: [forecast] }, null, 2);

    // Ecriture du fichier .json
    fs.writeFile(
        "./frontend/static/js/views/meteoPrevision.json",
        weather,
        (err) => {
            if (err) throw err;
        }
    );

    // Permet de récupérer la donné météo sur le moment
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=metric&appid=${API_KEY}`;
    const { data: current } = await axios.get(currentUrl);

    // Ajout de l'heure dans la data
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    current.time = time;

    // Conversion de la data en Json avec indentation
    weather = JSON.stringify({ data: [current] }, null, 2);

    // Ecriture du fichier .json
    fs.writeFile("./frontend/static/js/views/meteo.json", weather, (err) => {
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

app.post("/weather", function (req, res) {
    city = req.body.city;
    console.log("city POST:", city);

    let urlCurrent = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=fr`;
    request(urlCurrent, function (err, response, body) {
        // Ajoute la l'heure et permet de formater le fichier JSON
        weather = JSON.parse(body);

        // Création de l'heure
        let today = new Date();
        let time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();

        // Ajout de l'heure dans le fichier Json
        weather.time = time;

        // Les arguments de stringify permetent le formatage du fichier Json
        weather = JSON.stringify(weather, null, 2);

        // Ecriture du fichier meteo.json
        fs.writeFile(
            "./frontend/static/js/views/meteoCurrent.json",
            weather,
            (err) => {
                if (err) throw err;
            }
        );
    });

    //Manque comment faire pour ouvir la page weather voir avec res ?

    //res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(PORT || 4001, () => {
    console.log("Server running on PORT", PORT);
});

/* let url = `http://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=${API_KEY}`;
    request(url, function (err, response, body) {
        // Ajoute la l'heure et permet de formater le fichier JSON
        weather = JSON.parse(body);

        // Création de l'heure
        let today = new Date();
        let time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();

        // Ajout de l'heure dans le fichier Json
        weather.time = time;

        // Les arguments de stringify permetent le formatage du fichier Json
        weather = JSON.stringify(weather, null, 2);

        // Ecriture du fichier meteo.json
        fs.writeFile(
            "./frontend/static/js/views/meteo.json",
            weather,
            (err) => {
                if (err) throw err;
            }
        );
    }); */
