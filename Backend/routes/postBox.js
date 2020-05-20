const express = require('express');
const postBoxController = require('../controllers/postBox');
const router = express.Router();

router.get('/:userId',postBoxController.showMyPostBoxes);

router.put('/turnHeaterOn/:idPostBox', postBoxController.turnHeaterOn);
router.put('/turnHeaterOff/:idPostBox', postBoxController.turnHeaterOff);

router.post('/add/:userId', postBoxController.addToMyPostBoxes);

module.exports = router;