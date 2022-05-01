const multer = require("multer");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage }).single("profile_picture");

module.exports = upload