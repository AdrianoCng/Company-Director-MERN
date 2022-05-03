const { validationResult } = require("express-validator");
const Personnel = require("../models/personnel.modals");
const { paginate } = require("../utilities/functions");

exports.get_all_personnel = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json(errors);
        return;
    }

    const {
        page = 1,
        per_page = 5,
        order_field = "created_at",
        order = "desc",
        location,
        department = "",
    } = req.query;

    const filters = {
        location_name: location,
        department_name: department,
    };

    Personnel.get_all(filters, async (docs) => {
        try {
            const total = await docs.count();

            const { from, to, last_page, offset } = paginate({ page, per_page, total });

            const data = await docs
                .sort({ [order_field]: order })
                .skip(offset)
                .limit(per_page)
                .toArray();

            const response = {
                data,
                page,
                from: page > last_page ? 0 : from,
                to: page > last_page ? 0 : to,
                last_page: page > last_page ? 0 : last_page,
                per_page,
                total: page > last_page ? 0 : total,
            };

            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error.message);
        }
    });
};

exports.get_by_id = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors);
            return;
        }

        const { id } = req.params;

        Personnel.get_by_id(id, (err, doc) => {
            if (err) throw err;

            res.status(doc ? 200 : 404).json({ data: doc });
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.create_personnel = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors);
            return;
        }

        Personnel.create(req, (err, response) => {
            if (err) {
                res.status(400).json(err.message);
                return;
            }
            res.status(201).json(response);
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.delete_personnel = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors);
            return;
        }

        const { id } = req.params;

        Personnel.delete(id, (err, response) => {
            if (err) throw err;
            res.status(200).json(response);
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.update_personnel = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors);
            return;
        }

        const { id } = req.params;

        Personnel.update_personnel(req, (err, response) => {
            if (err) throw err;
            res.status(200).json(response);
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

exports.insertDummyData = (req, res) => {
    try {
        Personnel.insertDummyData((err) => {
            if (err) throw err;
            res.status(201).json("Dummy data inserted successfully");
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};
