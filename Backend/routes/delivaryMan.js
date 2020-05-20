const express = require('express');
const DeliveryGuyController = require('../controllers/delivaryMan');
const PackageController = require('../controllers/package');
const router = express.Router();

router.put("/closePostBox", DeliveryGuyController.closePostBox);
router.put("/deliverPackage", PackageController.deliverPackage);

router.post("/login", DeliveryGuyController.loginDeliveryGuy);
router.post("/requestOpen", DeliveryGuyController.sendRequestForOpen);

module.exports = router;