const router = require("express").Router();
const showAllBooks = require("../controllers/showAllBooks");
const postNewBook = require("../controllers/postNewBook");
const changeBookName = require("../controllers/changeBookName");
const deleteBook = require("../controllers/deleteBookById");

router.get("/books", showAllBooks); // done
router.post("/books/:bookname", postNewBook); // done

router.put("/books/:bookid", changeBookName); // done

router.delete("/books/:bookid", deleteBook); // done


module.exports = router;
