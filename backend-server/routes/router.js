const express= require('express');
const { postScore } = require('../controller/controller');

const router = express.Router();

router.route('/').post(postScore);

module.exports = router;