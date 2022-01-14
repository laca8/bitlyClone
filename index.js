const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//db
connectDB();

//define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server running");
});
