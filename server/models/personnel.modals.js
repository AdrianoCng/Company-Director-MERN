const { ObjectId } = require("mongodb");
const db = require("../db");
const dummyData = require("../utilities/dummyData.json");
const S3 = require("aws-sdk/clients/s3");

const s3 = new S3();

module.exports.create = async (req, cb) => {
    const db_connect = db.getDb();

    const { first_name, last_name, email, department_name, location_name } = req.body;

    if (!first_name || !last_name || !email || !department_name || !location_name) {
        cb(new Error("Field missing"), null);
        return;
    }

    const record = {
        first_name,
        last_name,
        email,
        department_name,
        location_name,
        avatar_url: req.avatar_url || null,
        avatar_key: req.avatar_key || null,
        created_at: new Date(),
        last_modified: null,
    };

    db_connect.collection("personnel").insertOne(record, cb);
};

module.exports.get_all = (filters, cb) => {
    const db_connect = db.getDb();

    let query = {};

    for (let keys in filters) {
        if (!filters[keys]) {
            continue;
        }
        query[keys] = { $in: filters[keys].split(",") };
    }

    const cursor = db_connect.collection("personnel").find(query);

    return cb(cursor);
};

module.exports.get_by_id = (id, cb) => {
    if (!id) {
        throw new Error("Id is required");
    }

    const db_connect = db.getDb();

    db_connect.collection("personnel").findOne({ _id: ObjectId(id) }, cb);
};

module.exports.delete = (id, cb) => {
    if (!id) {
        throw new Error("Id is required");
    }

    const db_connect = db.getDb();

    db_connect.collection("personnel").deleteOne({ _id: ObjectId(id) }, cb);
};

module.exports.update_personnel = (req, cb) => {
    const { id } = req.params;

    if (!id) {
        return cb(new Error("Id is required"));
    }

    const db_connect = db.getDb();

    let fields = {};

    for (let field in req.body) {
        switch (field) {
            case "first_name":
            case "last_name":
            case "email":
            case "department_name":
            case "location_name": {
                fields[field] = req.body[field];
                break;
            }
        }
    }

    if (req.avatar_url) {
        fields.avatar_url = req.avatar_url;
    }

    if (req.avatar_key) {
        fields.avatar_key = req.avatar_key;
    }

    if (Object.keys(fields).length === 0) {
        return cb(new Error("No fields to updated"));
    }

    db_connect.collection("personnel").updateOne(
        { _id: ObjectId(id) },
        {
            $set: fields,
            $currentDate: {
                last_modified: true,
            },
        },
        cb
    );
};

module.exports.insertDummyData = (cb) => {
    const db_connect = db.getDb();

    dummyData.forEach(async ({ first_name, last_name, email, department_name, location_name }) => {
        try {
            const record = {
                first_name,
                last_name,
                email,
                department_name,
                location_name,
                created_at: new Date(),
                last_modified: null,
            };

            await db_connect.collection("personnel").insertOne(record);
        } catch (error) {
            return cb(err);
        }
    });

    return cb();
};
