require('dotenv').config();
const axios = require('axios');

const botToken =  process.env.TOKEN;

axios.get(`https://api.telegram.org/bot${botToken}/getMe`)
.then(response => {
    if (response.data.ok) {
        console.log('Token valid:', response.data);
    } else {
        console.log('Token tidak valid:', response.data);
    }
})
.catch(error => {
    console.error('Kesalahan saat memverifikasi token:', error.response ? error.response.data : error.message);
});
