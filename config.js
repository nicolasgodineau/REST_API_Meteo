const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    PORT: process.env.PORT,
    API_KEY: process.env.API_KEY,
};

const express = require("express");
const path = require("path");
const app = express();

app.use(
    "/static",
    express.static(path.resolve(__dirname, "frontend", "static"))
);
app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(8081, () => console.log("ca marche!"));
