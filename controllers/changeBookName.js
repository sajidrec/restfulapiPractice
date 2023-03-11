const bookModel = require("../models/bookModel");

const changeBookName = async (req, res) => {
    const idBook = req.params.bookid;
    bookModel.findByIdAndUpdate(idBook, {
        bookName: req.body.bookName
    }).then(() => {
        res.redirect("/library/books");
    }).catch((err) => {
        res.send(err);
    });
}


module.exports = changeBookName;