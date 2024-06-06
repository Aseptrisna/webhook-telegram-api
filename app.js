require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require(`fs`);
const http = require("https");


const app = express();
const botToken = process.env.TOKEN;
const apiUrl = `${process.env.API_URL}${botToken}`;

const privateKey = fs.readFileSync(process.env.KEY_PEM, "utf8");
const certificate = fs.readFileSync(process.env.CERT_PEM, "utf8");
const ca = fs.readFileSync(process.env.CERT_PEM, "utf8");

const credentials = {
    rejectUnauthorized: true,
    key: privateKey,
    cert: certificate,
    passphrase: process.env.PFX_PASSPHRASE,
    ca: ca,
};

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const chatId = req.body.message.chat.id;
    const message = req.body.message.text;

    console.log(`Received message: ${message} from chat ID: ${chatId}`);

    // Contoh mengirim balasan
    sendMessage(chatId, `Anda mengirim: ${message}`);

    res.send('ok')

    res.send('ok');
});

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, this is your JSON response!',
        status: 'success',
        data: {
            info: 'You can add more detailed information here.'
        }
    });
});

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

const PORT = process.env.PORT || 5000;
const server = http.createServer(credentials, app);

server.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
