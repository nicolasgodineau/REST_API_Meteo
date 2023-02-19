const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const request = require("request");
const { PORT } = require("./config.js");
const { API_KEY } = require("./config.js");

const { OpenWeatherAPI } = require("openweather-api-node");

let weather = new OpenWeatherAPI({
    key: "98223b4c103f8a619c647cc3565cfa5b",
    locationName: "paris",
    units: "metric",
});

app.use(
    "/static",
    express.static(path.resolve(__dirname, "frontend", "static"))
);
app.get("/*", function (req, res) {
    weather.getCurrent().then((data) => {
        // Current temperature is defined in weatherModel.weather.temp.cur
        // If you are not sure what is weather model check it out in docs
        let newData = JSON.stringify(data);
        fs.writeFile("./frontend/static/js/views/data.json", newData, (err) => {
            if (err) throw err;
        });
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
