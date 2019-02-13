var express = require("express");
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require("../controllers/kruk.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", product_controller.test);

router.get("/all", product_controller.get_all);

router.post("/createCategory", product_controller.category_create);

router.put("/:id/add", product_controller.add_symbol);

router.put("/:categoryId/remove/:symbolId", product_controller.remove_symbol);

router.put("/:categoryId/edit/:symbolId", product_controller.edit_symbol);

// composition
module.exports = router;
