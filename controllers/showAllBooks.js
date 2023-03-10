const bookModel = require("../models/bookModel");

const showAllBooks = async (req, res) => {
    await bookModel.find({})
        .then(
            (data) => {
                res.json(data);
            }
        )
        .catch(
            (err) => {
                res.json(err);
            }
        );
}


module.exports = showAllBooks;