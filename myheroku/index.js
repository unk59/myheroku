const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors")
const route = process.env.PORT || 3000;


app.use(cors());
var jsonParser = bodyParser.json()

app.get("/status", (req, res) => {
    res.send("Status OK");
});


app.listen(route, () => {
    console.log("Server Started at", process.env.PORT || 3000);
});