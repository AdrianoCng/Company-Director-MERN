const router = require("express").Router();
const department_controller = require("../controllers/department.controllers");
const validate = require("../middlewares/validate.middlewares");

router.get("/", department_controller.get_all_departments);

router.get("/:id",
    validate.get_by_id(),
    department_controller.get_by_id
);

router.post("/",
    validate.create_department(),
    department_controller.create_department
);

router.delete("/:id",
    validate.delete(),
    department_controller.delete_department
);

router.put("/:id",
    validate.update_department(),
    department_controller.update_department
);

module.exports = router;