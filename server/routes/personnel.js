const express = require("express");
const personnel_controller = require("../controllers/personnel_controller");

const router = express.Router();

router.get("/", personnel_controller.personnel_list);

router.post("/", personnel_controller.personnel_create);

module.exports = router;