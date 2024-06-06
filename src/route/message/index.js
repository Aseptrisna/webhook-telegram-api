const express = require('express');
const router = express.Router();
const messageControler = require("../controller/message")

router.post('/iot/message', messageControler.sendMessage);
router.post('/lskk/message', messageControler.sendMessageLskk);

module.exports = router;