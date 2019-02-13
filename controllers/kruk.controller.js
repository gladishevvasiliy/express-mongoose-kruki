var Kruk = require("../models/kruk.model");

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

exports.category_create = function(req, res, next) {
  console.log("newKruk");
  var newKruk = new Kruk({
    name: req.body.name,
    symbols: req.body.symbols
  });

  newKruk.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Category created successfully");
  });
};

exports.add_symbol = function(req, res, next) {
  Kruk.findByIdAndUpdate(
    req.params.id,
    { $push: { symbols: req.body } },
    function(err) {
      if (err) return next(err);
      res.send("Symbol added.");
    }
  );
};

exports.remove_symbol = function(req, res, next) {
  Kruk.update(
    { _id: req.params.categoryId },
    { $pull: { symbols: { _id: req.params.symbolId } } },
    function(err) {
      if (err) return next(err);
      res.send("Symbol removed.");
    }
  );
};

exports.edit_symbol = function(req, res, next) {
  console.log(req);
  Kruk.update(
    { _id: req.params.categoryId, "symbols._id": req.params.symbolId },
    {
      $set: {
        "symbols.$": {
          _id: req.params.symbolId,
          id: req.body.id,
          name: req.body.name,
          opts: req.body.opts,
          value: req.body.value,
          pitch: req.body.pitch,
          sounds: req.body.sounds
        }
      }
    },
    false,
    function(err) {
      if (err) return next(err);
      res.send("Symbol edited.");
    }
  );
};
