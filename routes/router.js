const exp = require('constants');
const express= require('express');
const postScore = require('../controller');

const router = express.Router();

router.route('/').post(postScore);

module.exports = router;