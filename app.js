const express = require("express");
const app = express();

const api_routes = require("./routes/api_routes.js")

app.get("/", function (req, res) {
    res.send("<h1>Homepage</h1>")
})

// middleware to solve CORS issue
app.use(function (req, res, next) {
    res.setHeader('Acess-Control-Allow-Origin', '*')
});

app.use("/api", api_routes);

const port = process.env.PORT || 5500
// listen for server
app.listen(port, function (req, res) {
    console.log("Server running...")
});