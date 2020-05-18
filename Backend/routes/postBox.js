const express = require('express');
const postBoxController = require('../controllers/postBox');
const router = express.Router();

router.get('/:userId',postBoxController.showMyPostBoxes);
router.get('/add/:userId', postBoxController.addToMyPostBoxes);
module.exports = router;