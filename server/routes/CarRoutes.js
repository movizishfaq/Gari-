const express = require("express");
const { addcars } = require("../controller/CarControllers");
const { GrabToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/add-car/:user_id", GrabToken, addcars);

module.exports = router;
