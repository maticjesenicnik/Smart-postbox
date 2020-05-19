const express = require('express');
const DeliveryGuyController = require('../controllers/delivaryMan');
const PackageController = require('../controllers/package');
const router = express.Router();

router.post("/login", DeliveryGuyController.loginDeliveryGuy);
router.post("/deliverPackage", PackageController.deliverPackage);
router.post("/requestOpen", DeliveryGuyController.sendRequestForOpen);

module.exports = router;