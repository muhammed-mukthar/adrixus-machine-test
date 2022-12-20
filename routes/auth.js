const router = require("express").Router();
const { RegisterController, LoginController } = require("../controller/authController");
const userModel = require("../model/UserSchema");

router.post("/register", RegisterController);

router.post("/login", LoginController)
module.exports = router;
