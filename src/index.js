const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./route");


app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Load environment variables from .env file
if (dotenv.error) {
    console.error("Error loading .env file:", dotenv.error);
} else {
    console.log(".env file loaded successfully");
}

// Allow cross-origin requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Log HTTP requests
app.use(morgan("dev"));
// Define routes
app.use("/v1", routes);

module.exports = app;