const multer = require("multer");
const S3 = require("aws-sdk/clients/s3");
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const s3 = new S3();

const storage = multer.memoryStorage();

const upload = multer({ storage }).single("avatar");

module.exports = [
    upload,
    async (req, res, next) => {
        const { first_name, last_name } = req.body;

        if (req.file) {
            const params = {
                Bucket: AWS_BUCKET_NAME,
                Key: `${first_name}-${last_name}-${new Date().toISOString()}-${req.file.originalname}`,
                Body: req.file.buffer,
                ACL: "public-read",
                ContentType: "image/jpeg",
            };

            const uploadToS3 = new Promise((res, rej) => {
                s3.upload(params, (err, data) => {
                    if (err) {
                        rej(err);
                    } else {
                        res(data);
                    }
                });
            });

            try {
                const { Location, Key } = await uploadToS3;

                req.avatar_url = Location;
                req.avatar_key = Key;
            } catch (error) {
                next(error);
            }
        }

        next();
    },
];
