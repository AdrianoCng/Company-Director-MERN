const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "config.env") });
const express = require("express");
const cors = require("cors");
const db = require("./db");
const personnel = require("./routes/personnel.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/personnel", personnel);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    db.connectToServer(err => {
        if (err) console.log(err);
    });

    console.log(`Server listening on port ${PORT}`)
})