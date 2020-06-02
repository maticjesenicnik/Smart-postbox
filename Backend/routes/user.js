const express = require('express');
const UserController = require('../controllers/user');
const PackageController = require('../controllers/package');
const router = express.Router();

router.get("/getRequests/:userId", UserController.getRequest);
router.get("/getPackages/:userId", PackageController.showMyPackages);

router.put("/openPostBox/:idPostBox", UserController.openPostBox);

router.get("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);

module.exports = router;