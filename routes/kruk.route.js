const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const kruk_controller = require("../controllers/kruk.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/test", kruk_controller.test);

router.get("/all", kruk_controller.get_all);

router.post("/create/category", kruk_controller.kruk_create_category);

router.post("/create/symbol", kruk_controller.kruk_create_symbol);

router.get("/:id", kruk_controller.kruk_details);

router.put("/:id/update", kruk_controller.kruk_update);

router.delete("/:id/delete", kruk_controller.kruk_delete);

module.exports = router;
