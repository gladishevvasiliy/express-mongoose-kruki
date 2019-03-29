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
  console.log("new category of compositions");
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

exports.add_composition = function(req, res, next) {
  Composition.findByIdAndUpdate(
    req.params.id,
    { $push: { compositions: req.body } },
    function(err) {
      if (err) return next(err);
      res.send("Composition added.");
    }
  );
};

exports.remove_composition = function(req, res, next) {
  Composition.update(
    { _id: req.params.categoryId },
    { $pull: { compositions: { _id: req.params.compositionId } } },
    function(err) {
      if (err) return next(err);
      res.send("Composition removed.");
    }
  );
};
