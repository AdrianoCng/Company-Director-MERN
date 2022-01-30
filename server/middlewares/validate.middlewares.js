const { body, query } = require("express-validator");

const personnel_documents_fields = ["_id", "first_name", "last_name", "email"]

const validate = (method) => {
    switch (method) {
        case "create_personnel":
            return [
                body("first_name", "Invalid first name").exists().withMessage("Email is required").bail().trim().isAlpha(),
                body("last_name", "Invalid last name").exists().withMessage("Email is required").bail().trim().isAlpha(),
                body("email", "Invalid email").exists().withMessage("Email is required").bail().trim().isEmail().normalizeEmail(),
                // body("department_id", "Invalid department ID").exists().bail().isInt(),
                // body("location_id", "Invalid location ID").exists().bail().isInt(),
            ]
        case "get_all_personnel":
            return [
                query("page").optional().trim().isInt({ gt: 0 }).toInt(),
                query("per_page").optional().trim().isInt({ gt: 0 }).toInt(),
                query("order_field").optional().trim().toLowerCase().isIn(personnel_documents_fields),
                query("order").optional().trim().toLowerCase().isIn(["asc", "desc"]),
            ]

    }
}

module.exports = validate;