const express = require('express');
const router = express.Router();

const message = require("../route/message");
const webhook = require("../route/webhook");

router.use('/message', message);
router.use('/webhook', webhook);

router.get('/', (req, res) => {
    res.json({
        message: 'Hello, this is your JSON response!',
        status: 'success',
        data: {
            info: 'You can add more detailed information here.'
        }
    });
});

module.exports = router;