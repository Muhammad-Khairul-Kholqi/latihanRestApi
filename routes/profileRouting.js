const express = require('express');
const profileController = require('../controller/profileController');

const router = express.Router();

// read 
router.get('/', profileController.readProfile);

module.exports = router;