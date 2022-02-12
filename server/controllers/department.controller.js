const { validationResult } = require("express-validator");
const Departments = require("../models/department.modals");

exports.get_all_departments = (req, res) => {
    Departments.get_all(async (docs) => {
        try {
            const data = await docs.toArray();

            res.status(200).json(data);
        } catch (error) {
            res.status(500).send(error.message)
        }
    });
}