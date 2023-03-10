const mongoose = require("mongoose");

const connectDb = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/library").then(
        () => {
            console.log("Db connected");
        }
    ).catch(
        () => {
            console.log("Db connection failed");
        }
    );
}


module.exports = connectDb;