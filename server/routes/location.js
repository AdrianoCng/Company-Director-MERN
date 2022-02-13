const router = require("express").Router();
const validate = require("../middlewares/validate.middlewares");
const location_controller = require("../controllers/location.controllers");

router.get("/", location_controller.get_all);

router.get("/:id",
    validate.get_by_id(),
    location_controller.get_by_id
);

router.post("/",
    validate.create_location(),
    location_controller.create_location
);

router.delete("/:id",
    validate.delete(),
    location_controller.delete_location
);

module.exports = router;