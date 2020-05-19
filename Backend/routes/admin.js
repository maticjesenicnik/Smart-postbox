const express = require('express');
const AdminController = require('../controllers/admin');
const DeliveryGuyController = require('../controllers/delivaryMan');
const router = express.Router();

router.post("/addPostBox", AdminController.addPostBox);
router.post("/addPackage", AdminController.addPackage);
router.post("/addDelivaryMan", AdminController.createDeliveryGuy);

module.exports = router;