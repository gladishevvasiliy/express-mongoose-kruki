var Composition = require("../models/composition.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.get_all = function(req, res) {
  Composition.find({}, function(err, categories) {
    var allCompositionCategories = [];
    categories.forEach(function(category) {
      allCompositionCategories.push(category);
    });

    res.send(allCompositionCategories);
  });
};

exports.category_composition_create = function(req, res, next) {
  console.log("newComposition");
  var newComposition = new Composition({
    name: req.body.name,
    compositions: req.body.compositions
  });

  newComposition.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Composition category created successfully");
  });
};
