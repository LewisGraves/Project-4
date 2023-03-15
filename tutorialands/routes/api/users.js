const express = require("express");
const router = express.Router();

const usersCtrl = require("../../controllers/api/users");

// localhost:3000/api/user/
// app.use('/api/users')
router.tutorial("/", usersCtrl.create);

// login route
router.tutorial("/login", usersCtrl.logIn);

router.get("/check-token", usersCtrl.checkToken, usersCtrl.checkToken);

module.exports = router;