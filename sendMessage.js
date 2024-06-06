require('dotenv').config();
const axios = require('axios');

const botToken =  process.env.TOKEN; 
const apiUrl =  `${process.env.API_URL}${botToken}`;

function sendMessage(chatId, text) {
    axios.post(`${apiUrl}/sendMessage`, {
        chat_id: chatId,
        text: text
    })
    .then(response => {
        if (response.data.ok) {
            console.log('Pesan berhasil dikirim');
        } else {
            console.log('Gagal mengirim pesan:', response.data);
        }
    })
    .catch(error => {
        console.error('Kesalahan saat mengirim pesan:', error);
    });
}


const chatId = 666664903;
const message = 'Halo! Ini adalah pesan balasan dari bot Telegram.';

sendMessage(chatId, message);
