const axios = require("axios");

const botToken = process.env.TOKEN;
const apiUrl = `${process.env.API_URL}${botToken}`;
const botTokenLSKK = process.env.TOKEN_LSKK;
const apiUrlLSKK = `${process.env.API_URL}${botTokenLSKK}`;

class messageService {
  async sendMessage() {
    axios
      .post(`${apiUrl}/sendMessage`, {
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
  async sendMessageLskk() {
    axios
      .post(`${apiUrlLSKK}/sendMessage`, {
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
module.exports = new messageService();
