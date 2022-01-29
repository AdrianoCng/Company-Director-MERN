const dbo = require("../models/conn");
const personnel_collection = "personnel";

exports.get_all_personnel = async (req, res) => {
    const db_connect = dbo.getDb();

    const cursor = db_connect.collection(personnel_collection).find({});

    const response_data = {
        data: await cursor.toArray(),
        total: await cursor.count(),
    }

    res.json(response_data);
}

exports.create_personnel = (req, res) => {
    try {
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
    } catch (error) {

    }
}