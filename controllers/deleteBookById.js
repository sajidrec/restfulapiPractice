const bookModel = require("../models/bookModel");
const deleteBookById = async (req, res) => {
    bookModel.findOneAndDelete({ bookId: req.params.bookid }).then(
        () => {
            res.redirect("/library/books");
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    );
}


module.exports = deleteBookById;