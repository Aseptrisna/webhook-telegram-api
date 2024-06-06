const express = require('express');
const router = express.Router();
const messageControler = require("../../controller/message")

router.post('/iot/webhook', messageControler.sendMessage);
router.post('/lskk/webhook', messageControler.sendMessageLskk);


module.exports = router;