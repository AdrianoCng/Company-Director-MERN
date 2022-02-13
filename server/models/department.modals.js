const { ObjectId } = require("mongodb");
const db = require("../db");

module.exports.get_all = (cb) => {
    const db_connect = db.getDb();

    const cursor = db_connect.collection("departments").find();

    return cb(cursor);
}

module.exports.create = (obj, cb) => {
    const db_connect = db.getDb();

    if (!obj.name) {
        throw new Error("Name is required");
    }

    const newDepartment = {
        name: obj.name,
    }

    db_connect.collection("departments").insertOne(newDepartment, cb);
}

module.exports.get_by_id = (id, cb) => {
    const db_connect = db.getDb();

    db_connect.collection("departments").findOne({ _id: ObjectId(id) }, cb)
};