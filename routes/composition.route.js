var express = require("express");
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require("../controllers/composition.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", product_controller.test);

router.get("/all", product_controller.get_all);

router.post(
  "/createCompositionCategory",
  product_controller.category_composition_create
);

module.exports = router;
