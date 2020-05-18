const express = require('express');
const AdminController = require('../controllers/admin');
const router = express.Router();

router.post("/addPostBox", AdminController.addPostBox);

module.exports = router;