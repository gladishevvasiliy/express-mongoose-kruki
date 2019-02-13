var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var kruk = require("./routes/kruk.route"); // Imports routes for the products
var composition = require("./routes/composition.route"); // Imports routes for the products

var app = express();
app.use(cors());

// Set up mongoose connection
var mongoose = require("mongoose");
var dev_db_url =
  "mongodb://domestikos:yaplakal1936@ds137404.mlab.com:37404/kruk";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/kruk", kruk);
app.use("/composition", composition);

var port = 1235;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
