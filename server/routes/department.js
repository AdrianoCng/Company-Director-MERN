const router = require("express").Router();
const department_controller = require("../controllers/department.controller");

router.get("/", department_controller.get_all_departments);

module.exports = router;