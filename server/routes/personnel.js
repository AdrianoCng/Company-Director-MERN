const validate = require("../middlewares/validate.middlewares");
const personnel_controller = require("../controllers/personnel.controllers");

const router = require("express").Router();

// Get all personnel
router.get("/",
    validate("get_all_personnel"),
    personnel_controller.get_all_personnel
);

// Create personnel
router.post("/",
    validate("create_personnel"),
    personnel_controller.create_personnel
);

module.exports = router;