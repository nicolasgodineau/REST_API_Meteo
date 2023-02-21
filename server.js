const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const request = require("request");
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");

app.use(
    "/static",
    express.static(path.resolve(__dirname, "frontend", "static"))
);

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.post("/myform", function (req, res) {
    console.log(req.body.mytext); //mytext is the name of your input box
});

app.get("/", function (req, res) {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=${API_KEY}`;
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
    });

    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.post("/weather", function (req, res) {
    // récupère le texte de l'input
    city = req.body.city;
    console.log("city:", city);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    console.log("url:", url);
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
    });

    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(PORT || 4001, () => {
    console.log("Server running on PORT", PORT);
});

/* 

Permet l'enregistrement dans un fichier Json
var newData = JSON.stringify(data);
        fs.writeFile(
            "./frontend/static/js/views/posts.json",
            newData,
            (err) => {
                if (err) throw err;
            }
        );


*/
