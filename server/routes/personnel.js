const validate = require("../middlewares/validate");
const personnel_controller = require("../controllers/personnel_controller");

const router = require("express").Router();

// Get all personnel
router.get("/", personnel_controller.get_all_personnel);

// Create personnel
router.post("/",
    validate("create_personnel"),
    personnel_controller.create_personnel
);

module.exports = router;