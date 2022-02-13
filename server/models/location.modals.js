const { ObjectId } = require("mongodb");
const db = require("../db");

module.exports.get_all = (cb) => {
    const db_connect = db.getDb();

    const cursor = db_connect.collection("locations").find();

    return cb(cursor);
}

module.exports.get_by_id = (id, cb) => {
    const db_connect = db.getDb();

    db_connect.collection("locations").findOne({ _id: ObjectId(id) }, cb);
}