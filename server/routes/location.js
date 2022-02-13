const router = require("express").Router();
const validate = require("../middlewares/validate.middlewares");
const location_controller = require("../controllers/location.controller");

router.get("/", location_controller.get_all);

router.get("/:id",
    validate.get_by_id(),
    location_controller.get_by_id
);

router.post("/",
    validate.create_location(),
    location_controller.create
);

module.exports = router;