const express = require('express');
const UserController = require('../controllers/user');
const router = express.Router();

router.get("/getRequests/:userId", UserController.getRequest);

router.put("/openPostBox/:idPostBox", UserController.openPostBox);

router.post("/signup", UserController.createUser);
router.post("/login", UserController.loginUser);

module.exports = router;