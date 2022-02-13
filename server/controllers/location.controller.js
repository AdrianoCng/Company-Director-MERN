const { validationResult } = require("express-validator");
const Location = require("../models/location.modals");

module.exports.get_all = (req, res) => {
    Location.get_all(async (docs) => {
        try {
            const data = await docs.toArray();

            res.status(200).json({ data })
        } catch (error) {
            res.status(500).json(error.message);
        }
    })
}

module.exports.get_by_id = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors);
            return;
        }

        const { id } = req.params;

        Location.get_by_id(id, (err, response) => {
            if (err) throw err;
            res.status(200).json(response);
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
}