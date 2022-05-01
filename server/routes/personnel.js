const validate = require("../middlewares/validate.middlewares");
const upload = require("../middlewares/upload.middlewares");
const personnel_controller = require("../controllers/personnel.controllers");

const router = require("express").Router();

router.get("/", validate.get_all_personnel(), personnel_controller.get_all_personnel);

router.get("/:id", validate.get_by_id(), personnel_controller.get_by_id);

router.post(
    "/",
    validate.create_personnel(),
    upload.single("personnelPicture"),
    personnel_controller.create_personnel
);

router.delete("/:id", validate.delete(), personnel_controller.delete_personnel);

router.put("/:id", validate.update_personnel(), personnel_controller.update_personnel);

router.post("/dummy-data", personnel_controller.insertDummyData);

module.exports = router;
