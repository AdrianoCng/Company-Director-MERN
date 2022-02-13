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