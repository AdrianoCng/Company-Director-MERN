const { body } = require("express-validator");

const validate = (method) => {
    switch (method) {
        case "create_personnel":
            return [
                body("first_name", "Invalid first name").exists().withMessage("Email is required").bail().isAlpha(),
                body("last_name", "Invalid last name").exists().withMessage("Email is required").bail().isAlpha(),
                body("email", "Invalid email").exists().withMessage("Email is required").bail().isEmail(),
                // body("department_id", "Invalid department ID").exists().bail().isInt(),
                // body("location_id", "Invalid location ID").exists().bail().isInt(),
            ]

    }
}

module.exports = validate;