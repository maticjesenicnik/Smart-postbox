const express = require('express');
const postBoxController = require('../controllers/postBox');
const router = express.Router();

router.get('/:userId',postBoxController.showMyPostBoxes);

router.put('/turnHeaterOn/:idPostBox', postBoxController.turnHeaterOn);
router.put('/turnHeaterOff/:idPostBox', postBoxController.turnHeaterOff);

router.post('/add/:userId', postBoxController.addToMyPostBoxes);
router.post('/checkIfDeliverd/:userId/:postBoxId', postBoxController.checkIfPackagesArrived);

router.delete('/pickUpPackages/:postBoxId', postBoxController.pickUpPackages);

module.exports = router;