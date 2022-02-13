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

exports.get_by_id = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors);
            return;
        }

        const { id } = req.params;

        Departments.get_by_id(id, (err, doc) => {
            if (err) throw err;
            res.status(doc ? 200 : 404).json({ data: doc });
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.create_department = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors);
            return;
        }

        Departments.create(req.body, (err, response) => {
            if (err) throw err;
            res.status(201).json(response);
        })
    } catch (error) {
        res.status(500).json(error.message);
    }
}