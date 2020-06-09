const express = require('express');
const DeliveryGuyController = require('../controllers/delivaryMan');
const PackageController = require('../controllers/package');
const router = express.Router();

router.post("/closePostBox", DeliveryGuyController.closePostBox); // "Zaprl sem nabiralnik"
router.put("/deliverPackage", PackageController.deliverPackage); // Prikaže vse pakete, ki jih mora dostaviti

router.post("/login", DeliveryGuyController.loginDeliveryGuy); // login delivery man
router.post("/requestOpen", DeliveryGuyController.sendRequestForOpen); // zahtevek za odprtje nabiralnika

module.exports = router;
