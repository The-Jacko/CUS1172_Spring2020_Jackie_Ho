const express = require("express");
const app = express();

const api_routes = require("./routes/api_routes.js")

app.get("/", function (req, res) {
    res.send("<h1>Homepage</h1>")
})

app.use("/api", api_routes);

const port = process.env.PORT || 5500
// listen for server
app.listen(port, function (req, res) {
    console.log("Server running...")
});