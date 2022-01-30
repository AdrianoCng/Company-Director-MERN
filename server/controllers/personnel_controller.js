const dbo = require("../db");
const { validationResult } = require("express-validator");
const Personnel = require("../models/Personnel");
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
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors);
            return;
        }

        Personnel.create(req.body, (err, response) => {
            if (err) throw err;
            res.status(201).json(response);
        })
    } catch (error) {
        res.status(500).json(error);
    }
}