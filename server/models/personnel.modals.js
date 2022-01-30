const db = require("../db");

module.exports.create = (obj, cb) => {
    const db_connect = db.getDb()

    const { first_name, last_name, email } = obj;

    if (!first_name || !last_name || !email) {
        throw new Error();
    }

    const record = {
        first_name,
        last_name,
        email,
        created_at: new Date(),
    }

    db_connect.collection("personnel").insertOne(record, cb)
}

module.exports.get_all = (cb) => {
    const db_connect = db.getDb();

    const cursor = db_connect.collection("personnel").find();

    return cb(cursor);
}