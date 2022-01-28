const express = require("express");
const personnel_controller = require("../controllers/personnel_controller");

const router = express.Router();

router.get("/", personnel_controller.personnel_list);

module.exports = router;