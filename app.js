// app.js

const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");

const kruk = require("./routes/kruk.route"); // Imports routes for the products
const app = express();
app.use(cors());

// Set up mongoose connection
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb://domestikos:yaplakal1936@ds137404.mlab.com:37404/kruk";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/kruki", kruk);

let port = 1235;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
