const express = require("express");
const bodyPaser = require("body-parser");
const dotenv = require("dotenv");
const colors = require("colors");

const db = require("./config/db");

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(PORT, async () => {
    console.log(`Server is Started at ${PORT}`.bgBlue);
    await db()
});