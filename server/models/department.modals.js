const db = require("../db");

module.exports.get_all = (cb) => {
    const db_connect = db.getDb();

    const cursor = db_connect.collection("departments").find();

    return cb(cursor);
}