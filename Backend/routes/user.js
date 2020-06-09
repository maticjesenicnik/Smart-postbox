const express = require('express');
const UserController = require('../controllers/user');
const PackageController = require('../controllers/package');
const router = express.Router();

router.get("/getRequests/:userId", UserController.getRequest); // Skip
router.get("/getPackages/:userId", PackageController.showMyPackages); // Prikaži pakete

router.post("/openPostBox", UserController.openPostBox); // Odpri nabiralnik

router.post("/signup", UserController.createUser); // Done
router.post("/login", UserController.loginUser); // Done

module.exports = router;
