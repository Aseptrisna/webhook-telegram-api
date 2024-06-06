const axios = require("axios");

const botToken = process.env.TOKEN;
const apiUrl = `${process.env.API_URL}${botToken}`;
const botTokenLSKK = process.env.TOKEN_LSKK;
const apiUrlLSKK = `${process.env.API_URL}${botTokenLSKK}`;

class webhookService {
  async sendwebhook() {
    axios
      .post(`${apiUrl}/sendwebhook`, {
        chat_id: chatId,
        text: text,
      })
      .then((response) => {
        if (response.data.ok) {
          console.log("Pesan berhasil dikirim");
        } else {
          console.log("Gagal mengirim pesan:", response.data);
        }
      })
      .catch((error) => {
        console.error("Kesalahan saat mengirim pesan:", error);
      });
  }
  async sendwebhookLskk() {
    axios
      .post(`${apiUrlLSKK}/sendwebhook`, {
        chat_id: chatId,
        text: text,
      })
      .then((response) => {
        if (response.data.ok) {
          console.log("Pesan berhasil dikirim");
        } else {
          console.log("Gagal mengirim pesan:", response.data);
        }
      })
      .catch((error) => {
        console.error("Kesalahan saat mengirim pesan:", error);
      });
  }
}
module.exports = new webhookService();
