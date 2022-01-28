const mockData = require("../mock/MOCK_DATA.json");

exports.personnel_list = (req, res) => {
    res.json(mockData)
}