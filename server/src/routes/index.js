const { Router } = require("express");
const getDriversHandler = require ("../handlers/getDriversHandler")
const getDriverByIdHandñer = require("../handlers/getDriverByIdHandler")
const router = Router();

router.get("/drivers", getDriversHandler)
router.get("/drivers/:id", getDriverByIdHandñer)
module.exports = router;
