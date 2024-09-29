// routing for user api
// require express,becausewe have a router in express
const express = require("express");
const { registerUser, loginuser } = require("../controller/userController");
const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginuser);
module.exports = router;
