const multer = require("multer");

const storage = multer.memoryStorage({
    destination: (req, file, cb) => {
        cb(null, "");
    },
});

const fileFilter = (req, file, cb) => {
    const allowFormats = ["image/jpeg", "image/jpg"];

    if (allowFormats.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
