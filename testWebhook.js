require('dotenv').config();
const axios = require('axios');

const botToken = process.env.TOKEN;
const webhookUrl = process.env.WEBHOOKURL;

axios.post(`https://api.telegram.org/bot${botToken}/setWebhook`, {
    url: webhookUrl
})
.then(response => {
    if (response.data.ok) {
        console.log('Webhook berhasil disetel');
    } else {
        console.log('Gagal menyetel webhook:', response.data);
    }
})
.catch(error => {
    console.error('Kesalahan saat menyetel webhook:', error);
});
