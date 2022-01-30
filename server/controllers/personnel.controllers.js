const { validationResult } = require("express-validator");
const Personnel = require("../models/personnel.modals");
const { paginate } = require("../utilities/functions")

exports.get_all_personnel = (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json(errors)
            return;
        }

        Personnel.get_all(async docs => {
            const { page = 1, per_page = 5, order_field = "_id", order = "desc" } = req.query;

            const total = await docs.count();

            const { from, to, last_page, offset } = paginate({ page, per_page, total });

            const data = await docs.sort({ [order_field]: order }).skip(offset).limit(per_page).toArray();

            const response = {
                data,
                page,
                from: page > last_page ? 0 : from,
                to: page > last_page ? 0 : to,
                last_page,
                per_page,
                total: page > last_page ? 0 : total,
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