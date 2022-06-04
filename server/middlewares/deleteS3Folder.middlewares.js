const S3 = require("aws-sdk/clients/s3");
const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const s3 = new S3();

const emptyS3Directory = async (bucket, dir) => {
    const listParams = {
        Bucket: bucket,
        Prefix: dir,
    };

    const listedObjects = await s3.listObjectsV2(listParams).promise();

    if (listedObjects.Contents.length === 0) return;

    const deleteParams = {
        Bucket: bucket,
        Delete: { Objects: [] },
    };

    listedObjects.Contents.forEach(({ Key }) => {
        deleteParams.Delete.Objects.push({ Key });
    });

    await s3.deleteObjects(deleteParams).promise();

    if (listedObjects.IsTruncated) await emptyS3Directory(bucket, dir);
};

module.exports = async (req, res, next) => {
    if (req.personnelDetails) {
        const { first_name, last_name } = req.personnelDetails;

        const dir = `${first_name.toLowerCase()}_${last_name.toLowerCase()}/`;

        try {
            await emptyS3Directory(AWS_BUCKET_NAME, dir);
        } catch (error) {
            next(error);
        }
    }

    next();
};
