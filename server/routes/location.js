const router = require("express").Router();
const validate = require("../middlewares/validate.middlewares");
const location_controller = require("../controllers/location.controller");

router.get("/", location_controller.get_all);

module.exports = router;