const express = require('express');
const router = express.Router();

const user = require('../operation/user/user.main');

router.post('/register', user.createUser);
router.post('/login', user.login);

module.exports = router;



