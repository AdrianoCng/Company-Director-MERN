const Personnel = require("../models/personnel.modals");

module.exports = async (req, res, next) => {
    const { id } = req.params;

    if (id) {
        const findDetails = new Promise((res, rej) => {
            Personnel.get_by_id(id, (err, doc) => {
                if (err) {
                    rej(err);
                } else {
                    res(doc);
                }
            });
        });

        try {
            const details = await findDetails;
            req.personnelDetails = details;
        } catch (err) {
            next(err);
        }
    }

    next();
};
