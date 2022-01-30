const { validationResult } = require("express-validator");
const Personnel = require("../models/personnel.modals");

exports.get_all_personnel = (req, res) => {
    try {
        Personnel.get_all(async docs => {
            const response = {
                data: await docs.toArray(),
                total: await docs.count(),
            }

            res.status(200).json(response);
        });
    } catch (error) {
        res.status(500).json(error);
    }
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