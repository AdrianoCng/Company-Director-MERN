const dbo = require("../models/conn");
const personnel_collection = "personnel";

exports.personnel_list = (req, res) => {
    const db_connect = dbo.getDb();

    db_connect.collection(personnel_collection).find({}).toArray((err, response) => {
        if (err) throw err;
        res.json(response);
    })
}

exports.personnel_create = (req, res) => {
    const db_connect = dbo.getDb();

    const { first_name, last_name } = req.body;

    const data = {
        first_name: first_name,
        last_name: last_name,
    }

    db_connect.collection(personnel_collection).insertOne(data, (err, response) => {
        if (err) throw err;
        res.json(response);
    })
}