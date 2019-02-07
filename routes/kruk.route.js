var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var product_controller = require('../controllers/kruk.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);

router.get('/all', product_controller.get_all)

router.post('/create', product_controller.category_create);

router.put('/:id/add', product_controller.add_symbol);

router.put('/:categoryId/remove/:symbolId', product_controller.remove_symbol);

router.put('/:categoryId/edit/:symbolId', product_controller.edit_symbol);



module.exports = router;


















// const express = require("express");
// const router = express.Router();

// // Require the controllers WHICH WE DID NOT CREATE YET!!
// const kruk_controller = require("../controllers/kruk.controller");

// // a simple test url to check that all of our files are communicating correctly.
// router.get("/test", kruk_controller.test);

// router.get("/all", kruk_controller.get_all);

// router.post("/create/category", kruk_controller.kruk_create_category);

// router.post("/create/symbol", kruk_controller.kruk_create_symbol);

// router.get("/:id", kruk_controller.kruk_details);

// router.put("/:id/update", kruk_controller.kruk_update);

// router.delete("/:categoryId/:symbolId/delete/", kruk_controller.kruk_delete);

// module.exports = router;
