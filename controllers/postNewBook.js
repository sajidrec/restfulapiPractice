const bookModel = require("../models/bookModel");
const mongoose = require("mongoose");

const postNewBook = async (req, res) => {

    let bookN = req.params.bookname;

    await bookModel.create({
        bookName: bookN,
        bookId: new mongoose.Types.ObjectId
    }).then(() => {
            res.redirect("/library/books");
        }).catch((err) => {
            res.send(err);
        });


}


module.exports = postNewBook;