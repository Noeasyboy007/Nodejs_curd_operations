require("dotenv").config();

const colors = require("colors");

const express = require("express");

const bodyPaser = require("body-parser");

const db = require("./config/db")

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server is Started at ${PORT}`.bgBlue);
    await db()
});