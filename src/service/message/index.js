const axios = require("axios");

const botToken = process.env.TOKEN;
const apiUrl = `${process.env.API_URL}${botToken}`;
const botTokenLSKK = process.env.TOKEN_LSKK;
const apiUrlLSKK = `${process.env.API_URL}${botTokenLSKK}`;

class messageService {
  async sendMessage(chatId, message) {
    axios
      .post(`${apiUrl}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      .then((response) => {
        if (response.data.ok) {
          return {
            status: true,
            code: 200,
            message: "succes",
          };
        } else {
          console.log("Gagal mengirim pesan:", response.data);
          return { status: false, code: 500, message: "Internal Server Error" };
        }
      })
      .catch((error) => {
        return { status: false, code: 500, message: "Internal Server Error" };
      });
  }

  async sendMessageLskk(chatId, message) {
    axios
      .post(`${apiUrlLSKK}/sendMessage`, {
        chat_id: chatId,
        text: message,
      })
      .then((response) => {
        if (response.data.ok) {
          return {
            status: true,
            code: 200,
            message: "succes",
          };
        } else {
          console.log("Gagal mengirim pesan:", response.data);
          return { status: false, code: 500, message: "Internal Server Error" };
        }
      })
      .catch((error) => {
        return { status: false, code: 500, message: "Internal Server Error" };
      });
  }
}
module.exports = new messageService();
