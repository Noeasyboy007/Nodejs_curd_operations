const express = require('express');

const {test,create} = require("../controller/userController")

const router = express.Router();

router.get("/test",test);
router.post("/create",create);

module.exports = router; 