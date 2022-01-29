const express = require("express");
const personnel_controller = require("../controllers/personnel_controller");

const router = express.Router();

router.get("/", personnel_controller.get_all_personnel);

router.post("/", personnel_controller.create_personnel);

module.exports = router;