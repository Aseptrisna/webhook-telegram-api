const express = require('express');
const router = express.Router();
const messageControler = require("../../controller/message")

router.post('/iot', messageControler.sendMessage);
router.post('/lskk', messageControler.sendMessageLskk);

module.exports = router;