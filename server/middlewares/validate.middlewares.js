const { body, query, param } = require("express-validator");
const constants = require("../utilities/constants");

module.exports = {
    get_all_personnel: () => {
        return [
            query("page").optional().trim().isInt({ gt: 0 }).toInt(),
            query("per_page").optional().trim().isInt({ gt: 0 }).toInt(),
            query("order_field").optional().trim().toLowerCase().isIn(constants.personnel_documents_fields),
            query("order").optional().trim().toLowerCase().isIn(["asc", "desc"]),
        ];
    },
    get_by_id: () => {
        return param("id", "Invalid mongoDB ObjectId").trim().isMongoId()
    },
    create_personnel: () => {
        return [
            body("first_name", "Invalid first name").exists().withMessage("Email is required").bail().trim().toLowerCase().isAlpha(),
            body("last_name", "Invalid last name").exists().withMessage("Email is required").bail().trim().toLowerCase().isAlpha(),
            body("email", "Invalid email").exists().withMessage("Email is required").bail().trim().toLowerCase().isEmail().normalizeEmail(),
            // body("department_id", "Invalid department ID").exists().bail().isInt(),
            // body("location_id", "Invalid location ID").exists().bail().isInt(),
        ];
    },
    delete: () => {
        return param("id", "Invalid mongoDB ObjectId").trim().isMongoId();
    },
    update_personnel: () => {
        return [
            param("id", "Invalid mongoDB ObjectId").trim().isMongoId(),
            body("_id", "Cannot updated personnel ID").not().exists(),
            body("first_name", "Invalid first name").optional().not().isEmpty().trim().toLowerCase().isAlpha(),
            body("last_name", "Invalid last name").optional().not().isEmpty().trim().toLowerCase().isAlpha(),
            body("email", "Invalid email").optional().not().isEmpty().trim().toLowerCase().isEmail().normalizeEmail(),
        ]
    },
    create_department: () => {
        return [
            body("name").exists().withMessage("Name is required").bail().trim().toLowerCase().isString()
        ]
    },
    update_department: () => {
        return [
            param("id", "Invalid mongDB ObjectId").trim().isMongoId(),
            body("name").exists().trim().toLowerCase().isAlpha(),
        ]
    },
    create_location: () => {
        return [
            body("name").exists().withMessage("Name is required").bail().trim().toLowerCase().isString()
        ]
    }
};