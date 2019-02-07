var Kruk = require('../models/kruk.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

exports.get_all = function (req, res) {
  Kruk.find({}, function (err, categories) {
    var allCategories = [];
    categories.forEach(function (category) {
      allCategories.push(category);
    });

    res.send(allCategories);
  });
};

exports.category_create = function (req, res, next) {
  console.log("newKruk")
  var newKruk = new Kruk(
    {
      name: req.body.name,
    }
  );
  console.log(newKruk)

  newKruk.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send('Product Created successfully')
  })
};

exports.add_symbol = function (req, res, next) {
  Kruk.findByIdAndUpdate(req.params.id, { $push: { "symbols": req.body } }, function (err) {
    if (err) return next(err);
    res.send('Symbol added.');
  });
};

exports.remove_symbol = function (req, res, next) {
  Kruk.update({ "_id": req.params.categoryId }, { $pull: { "symbols": { "_id": req.params.symbolId } } }, function (err) {
    if (err) return next(err);
    res.send('Symbol removed.');
  });
};

exports.edit_symbol = function (req, res, next) {
  Kruk.update({ "_id": req.params.categoryId }, { $set: { "symbols": { "_id": req.params.symbolId } } }, function (err) {
    if (err) return next(err);
    res.send('Symbol edited.');
  });
};


// exports.delete_symbol = function (req, res, next) {
//   Kruk.findByIdAndRemove(req.params.id, function (err) {
//     if (err) return next(err);
//     res.send('Deleted successfully!');
//   })
// };
















































// var _ = require("lodash");

// const Kruk = require("../models/kruk.model");

// exports.test = function (req, res) {
//   res.send("Greetings from the Test controller!");
// };

// exports.get_all = function (req, res) {
//   Kruk.find({}, function (err, categories) {
//     var allCategories = [];
//     categories.forEach(function (category) {
//       allCategories.push(category);
//     });

//     res.send(allCategories);
//   });
// };

// exports.kruk_create_category = function (req, res) {
//   let product = new Kruk(
//     {
//       name: req.body.name,
//       price: req.body.list
//     }
//   );

//   product.save(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.send('Product Created successfully')
//   })
// };

// // exports.kruk_create_symbol = function(req, res) {
// //   console.log("Adding to category " + req.body.categoryId + "...");
// //   console.log(req.body);
// //   Kruk.updateOne(
// //     { _id: req.body.categoryId },
// //     {
// //       $push: {
// //         symbols: {
// //           value: req.body.value,
// //           pitch: req.body.pitch,
// //           name: req.body.name,
// //           sounds: req.body.sounds,
// //           opts: _.isNil(req.body.opts)
// //             ? []
// //             : req.body.opts.split(",").map(opt => opt.replace(/\s+/g, " "))
// //         }
// //       }
// //     },
// //     function(err) {
// //       if (err) {
// //         return next(err);
// //       }
// //       console.log("Symbol added successfully");
// //       res.send("Symbol added successfully");
// //     }
// //   );
// // };

// exports.kruk_create_symbol = function (req, res) {
//   console.log("Adding to category " + req.body.categoryId + "...");

//   Kruk.updateOne(
//     { _id: req.body.categoryId },
//     {
//       $push: {
//         symbols: {
//           value: req.body.value,
//           pitch: req.body.pitch,
//           name: req.body.name,
//           sounds: req.body.sounds,
//           opts: _.isNil(req.body.opts)
//             ? []
//             : req.body.opts.split(",").map(opt => opt.replace(/\s+/g, " "))
//         }
//       }
//     },
//     function (err) {
//       if (err) {
//         return next(err);
//       }
//       console.log("Symbol added successfully");
//       res.send("Symbol added successfully");
//     }
//   );
// };

// exports.kruk_details = function (req, res) {
//   Kruk.findById(req.params.id, function (err, kruk) {
//     if (err) return next(err);
//     res.send(kruk);
//   });
// };

// exports.kruk_update = function (req, res) {
//   console.log(req.body);
//   Kruk.findByIdAndUpdate(req.params.id, { $set: req.body }, function (
//     err,
//     kruk
//   ) {
//     if (err) {
//       console.log(err);
//       return res.send(err);
//     }
//     console.log(kruk);
//     res.send("Kruk udpated.");
//   });
// };

// exports.kruk_delete = function (req, res) {
//   console.log(
//     "Removing " +
//     req.params.symbolId +
//     " from category " +
//     req.params.categoryId +
//     "..."
//   );

//   Kruk.findByIdAndUpdate(
//     req.params.categoryId,
//     { $pull: { symbols: { _id: req.params.symbolId } } },
//     function (err, model) {
//       if (err) {
//         console.log(err);
//         return res.send(err);
//       }
//       return res.json(model);
//     }
//   );
// };
