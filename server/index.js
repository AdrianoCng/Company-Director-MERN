const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "config.env") });
const express = require("express");
const cors = require("cors");
const db = require("./db");
const personnel = require("./routes/personnel.js");
const department = require("./routes/department");
const location = require("./routes/location");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/personnel", personnel);
app.use("/api/department", department);
app.use("/api/location", location);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    db.connectToServer(err => {
        if (err) console.log(err);
    });

    console.log(`Server listening on port ${PORT}`)
})