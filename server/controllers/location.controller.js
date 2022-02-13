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