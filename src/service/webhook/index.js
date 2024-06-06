const axios = require("axios");

const botToken = process.env.TOKEN;
const apiUrl = `${process.env.API_URL}${botToken}`;
const botTokenLSKK = process.env.TOKEN_LSKK;
const apiUrlLSKK = `${process.env.API_URL}${botTokenLSKK}`;

class webhookService {
  async sendwebhook() {
    axios
      .post(`https://api.telegram.org/bot${botToken}/setWebhook`, {
        url: webhookUrl,
      })
      .then((response) => {
        if (response.data.ok) {
          console.log("Webhook berhasil disetel");
        } else {
          console.log("Gagal menyetel webhook:", response.data);
        }
      })
      .catch((error) => {
        console.error("Kesalahan saat menyetel webhook:", error);
      });
  }
  async sendwebhookLskk() {
    axios
      .post(`https://api.telegram.org/bot${botTokenLSKK}/setWebhook`, {
        url: webhookUrl,
      })
      .then((response) => {
        if (response.data.ok) {
          console.log("Webhook berhasil disetel");
        } else {
          console.log("Gagal menyetel webhook:", response.data);
        }
      })
      .catch((error) => {
        console.error("Kesalahan saat menyetel webhook:", error);
      });
  }
}
module.exports = new webhookService();
