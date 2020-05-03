const express = require("express");
const app = express();

const homepage_routes = require("./routes/homepage_routes");
const api_routes = require("./routes/api_routes.js");

// middleware to solve CORS issue
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// all api routes
app.use("/", homepage_routes);
app.use("/api", api_routes);

const port = process.env.PORT || 5500
// listen for server
app.listen(port, function (req, res) {
    console.log("Server running...")
});