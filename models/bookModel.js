const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String
    }
});

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;