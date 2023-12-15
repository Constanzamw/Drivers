const { Router } = require("express");
const getDriversHandler = require ("../handlers/getDriversHandler")

const router = Router();

router.get("/drivers", getDriversHandler)
module.exports = router;
