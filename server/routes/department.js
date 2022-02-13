const router = require("express").Router();
const department_controller = require("../controllers/department.controller");
const validate = require("../middlewares/validate.middlewares");

router.get("/", department_controller.get_all_departments);

router.post("/",
    validate.create_department(),
    department_controller.create_department
);

module.exports = router;