const express = require("express");
const app = express();

const api_routes = require("./routes/api_routes.js")

app.use("/api", api_routes);

// listen for server
app.listen(5501, function (req, res) {
    console.log("Server running...")
});