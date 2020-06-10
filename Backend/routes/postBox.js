const express = require('express');
const postBoxController = require('../controllers/postBox');
const router = express.Router();
const checkAuth = require("../middleware/check-auth");

router.get('/:userId', checkAuth ,postBoxController.showMyPostBoxes); // Prikaži vse postboxe svoje

router.post('/turnHeaterOn', postBoxController.turnHeaterOn); // Turn on heater
router.post('/turnHeaterOff', postBoxController.turnHeaterOff); // Turn off heater

router.post('/add', postBoxController.addToMyPostBoxes); // Dodaj nabiralnik k svojim (aktivacijska koda)
router.post('/checkIfDeliverd/:userId/:postBoxId', postBoxController.checkIfPackagesArrived); // Neki poheki

router.delete('/pickUpPackages/:postBoxId', postBoxController.pickUpPackages); // Preveri pakete in potrdi prevzem

module.exports = router;
