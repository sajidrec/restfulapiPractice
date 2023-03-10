const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
const connectDb = require("./connectDb");
const libraryRoutes = require("./routes/libraryRoutes");

connectDb();

app.use(express.json());

app.use("/library", libraryRoutes);

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});
