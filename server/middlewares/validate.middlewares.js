const { body, query, param, checkSchema } = require("express-validator");
const constants = require("../utilities/constants");

module.exports = {
    get_all_personnel: () => {
        return [
            query("page").optional().trim().isInt({ gt: 0 }).toInt(),
            query("per_page").optional().trim().isInt({ gt: 0 }).toInt(),
            query("order_field").optional().trim().toLowerCase().isIn(constants.personnel_documents_fields),
            query("order").optional().trim().toLowerCase().isIn(["asc", "desc"]),
            query("location").optional().trim().toLowerCase().isString(),
            query("department").optional().trim().toLowerCase().isString(),
        ];
    },
    get_by_id: () => {
        return param("id", "Invalid mongoDB ObjectId").trim().isMongoId();
    },
    create_personnel: () => {
        return [
            body("first_name", "Invalid first name")
                .exists({ checkFalsy: true })
                .withMessage("First name field is required")
                .bail()
                .trim()
                .toLowerCase()
                .isAlpha(),
            body("last_name", "Invalid last name")
                .exists({ checkFalsy: true })
                .withMessage("Last name field is required")
                .bail()
                .trim()
                .toLowerCase()
                .isAlpha(),
            body("email", "Invalid email")
                .exists({ checkFalsy: true })
                .withMessage("Email field is required")
                .bail()
                .trim()
                .toLowerCase()
                .isEmail()
                .normalizeEmail(),
            body("department_name")
                .exists({ checkFalsy: true })
                .withMessage("Department field is required")
                .bail()
                .trim()
                .toLowerCase()
                .isString()
                .not()
                .isEmpty(),
            body("location_name")
                .exists({ checkFalsy: true })
                .withMessage("Location field is required")
                .bail()
                .trim()
                .toLowerCase()
                .isString(),
            checkSchema({
                avatar: {
                    custom: {
                        options: (value, { req, path }) =>
                            !req.file || req.file.mimetype.startsWith("image/"),
                        errorMessage: "Invalid file format.",
                    },
                },
            }),
        ];
    },
    delete: () => {
        return param("id", "Invalid mongoDB ObjectId").trim().isMongoId();
    },
    update_personnel: () => {
        return [
            param("id", "Invalid mongoDB ObjectId").trim().isMongoId(),
            body("_id", "Cannot updated personnel ID").not().exists(),
            body("first_name", "Invalid first name")
                .optional()
                .not()
                .isEmpty()
                .trim()
                .toLowerCase()
                .isAlpha(),
            body("last_name", "Invalid last name").optional().not().isEmpty().trim().toLowerCase().isAlpha(),
            body("email", "Invalid email")
                .optional()
                .not()
                .isEmpty()
                .trim()
                .toLowerCase()
                .isEmail()
                .normalizeEmail(),
            body("department_id", "Invalid department Id").optional().not().isEmpty().trim().isMongoId(),
            body("location_id", "Invalid location Id").optional().not().isEmpty().trim().isMongoId(),
            checkSchema({
                avatar: {
                    custom: {
                        options: (value, { req, path }) =>
                            !req.file ||
                            (req.file.mimetype.startsWith("image/") && req.file.size < 1024 * 1024 * 10),
                        errorMessage: "Invalid file format.",
                    },
                },
            }),
        ];
    },
    create_department: () => {
        return [
            body("name")
                .exists()
                .withMessage("Name is required")
                .bail()
                .trim()
                .toLowerCase()
                .isString()
                .escape(),
        ];
    },
    update_department: () => {
        return [
            param("id", "Invalid mongDB ObjectId").trim().isMongoId(),
            body("name").exists().bail().trim().toLowerCase().isAlpha(),
        ];
    },
    create_location: () => {
        return [
            body("name")
                .exists()
                .withMessage("Name is required")
                .bail()
                .trim()
                .toLowerCase()
                .isString()
                .escape(),
        ];
    },
    update_location: () => {
        return [
            param("id", "Invalid mongDB ObjectId").trim().isMongoId(),
            body("name").exists().bail().trim().toLowerCase().isAlpha(),
        ];
    },
};
