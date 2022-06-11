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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    db.connectToServer((err) => {
        if (err) console.log(err);
    });

    console.log(`Server listening on port ${PORT}`);
});
