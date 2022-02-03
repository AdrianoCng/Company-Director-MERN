const validate = require("../middlewares/validate.middlewares");
const personnel_controller = require("../controllers/personnel.controllers");

const router = require("express").Router();

// Get all personnel
router.get("/",
    validate.get_all_personnel(),
    personnel_controller.get_all_personnel
);

router.get("/:id",
    validate.get_by_id(),
    personnel_controller.get_by_id
);

// Create personnel
router.post("/",
    validate.create_personnel(),
    personnel_controller.create_personnel
);

router.delete("/:id",
    validate.delete_personnel(),
    personnel_controller.delete_personnel
);

module.exports = router;