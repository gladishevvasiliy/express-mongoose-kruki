const Kruk = require("../models/kruk.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.get_all = function(req, res) {
  Kruk.find({}, function(err, categories) {
    var allCategories = [];

    categories.forEach(function(category) {
      allCategories.push(category);
    });

    res.send(allCategories);
  });
};

exports.kruk_create_category = function(req, res) {
  console.log("Adding new category " + req.body.name + "...");
  console.log(req.body.list);

  var kruk = new Kruk({
    name: req.body.name,
    symbols: req.body.list
  });

  kruk.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Category added successfully");
    console.log("Category added successfully");
  });
};

exports.kruk_create_symbol = function(req, res) {
  console.log("Adding to category " + req.body.categoryId + "...");

  Kruk.updateOne(
    { _id: req.body.categoryId },
    {
      $push: {
        symbols: {
          value: req.body.value,
          pitch: req.body.pitch,
          name: req.body.name,
          sounds: req.body.sounds,
          opts: req.body.opts.split(",")
        }
      }
    },
    function(err) {
      if (err) {
        return next(err);
      }
      console.log("Symbol added successfully");
      res.send("Symbol added successfully");
    }
  );
};

exports.kruk_details = function(req, res) {
  Kruk.findById(req.params.id, function(err, kruk) {
    if (err) return next(err);
    res.send(kruk);
  });
};

exports.kruk_update = function(req, res) {
  Kruk.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    kruk
  ) {
    if (err) return next(err);
    res.send("Kruk udpated.");
  });
};

exports.kruk_delete = function(req, res) {
  Kruk.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
