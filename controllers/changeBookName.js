const bookModel = require("../models/bookModel");

const changeBookName = async (req, res) => {
    const idBook = req.params.bookid;
    console.log(req.body);
    // TODO:: req.body.bookName not working fix it
    // const newName = res.body.bookName;
    bookModel.findOneAndUpdate({ bookId: idBook }, {
        bookName: req.body.bookName
    }).then(() => {
        res.redirect("/library/books");
    }).catch((err) => {
        res.send(err);
    });
}


module.exports = changeBookName;