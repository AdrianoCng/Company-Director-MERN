const { ObjectId } = require("mongodb");
const db = require("../db");

module.exports.create = (obj, cb) => {
    const db_connect = db.getDb()

    const { first_name, last_name, email, department_id, location_id } = obj;

    if (!first_name || !last_name || !email || !department_id || !location_id) {
        throw new Error();
    }

    const record = {
        first_name,
        last_name,
        email,
        department_id,
        location_id,
        created_at: new Date(),
        last_modified: null,
    }

    db_connect.collection("personnel").insertOne(record, cb)
}

module.exports.get_all = (cb) => {
    const db_connect = db.getDb();

    const cursor = db_connect.collection("personnel").find();

    return cb(cursor);
}

module.exports.get_by_id = (id, cb) => {
    if (!id) {
        throw new Error("Id is required");
    }

    const db_connect = db.getDb();

    db_connect.collection("personnel").findOne({ _id: ObjectId(id) }, cb)
}

module.exports.delete = (id, cb) => {
    if (!id) {
        throw new Error("Id is required");
    }

    const db_connect = db.getDb();

    db_connect.collection("personnel").deleteOne({ _id: ObjectId(id) }, cb);
}

module.exports.update_personnel = (id, body, cb) => {
    if (!id) {
        throw new Error("Id is required");
    }

    const db_connect = db.getDb();

    let fields = {};

    for (field in body) {
        switch (field) {
            case "first_name":
            case "last_name":
            case "email":
            case "department_id":
            case "location_id": {
                fields[field] = body[field];
                break;
            }
        }
    }

    if (Object.keys(fields).length === 0) {
        return cb(new Error("No fields to updated"))
    }

    db_connect.collection("personnel").updateOne({ _id: ObjectId(id) }, {
        $set: fields,
        $currentDate: {
            last_modified: true
        }
    }, cb)
}