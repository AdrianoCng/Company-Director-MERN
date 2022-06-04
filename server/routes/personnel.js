const validate = require("../middlewares/validate.middlewares");
const upload = require("../middlewares/upload.middlewares");
const deleteS3Folder = require("../middlewares/deleteS3Folder.middlewares");
const findPersonnelDetails = require("../middlewares/findPersonnelDetails.middlewares");
const personnel_controller = require("../controllers/personnel.controllers");

const router = require("express").Router();

router.get("/", validate.get_all_personnel(), personnel_controller.get_all_personnel);

router.get("/:id", validate.get_by_id(), personnel_controller.get_by_id);

router.post("/", upload, validate.create_personnel(), personnel_controller.create_personnel);

router.delete(
    "/:id",
    validate.delete(),
    findPersonnelDetails,
    deleteS3Folder,
    personnel_controller.delete_personnel
);

router.put("/:id", upload, validate.update_personnel(), personnel_controller.update_personnel);

router.post("/dummy-data", personnel_controller.insertDummyData);

module.exports = router;
