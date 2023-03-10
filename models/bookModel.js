const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String
    },
    bookId: {
        type: String,
        unique:true
    }
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;