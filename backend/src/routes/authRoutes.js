const express = require('express');
const router = express.Router();
const { googleLogin } = require('../controllers/authController');

router.post('/', googleLogin);

module.exports = router;
