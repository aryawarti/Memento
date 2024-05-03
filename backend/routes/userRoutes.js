const express = require("express");
const { registerUser,authUser} = require("../controllers/userController");

const router = express.Router();

// Handle user registration
router.post("/", registerUser);
router.post("/login", authUser);


module.exports = router;
