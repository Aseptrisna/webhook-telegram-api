const messageService = require("../../service/message");

class Webhook {
  async sendMessage(req, res) {
    const chatId = req.body.message.chat.id;
    const message = req.body.message.text;

    console.log(`Received message: ${message} from chat ID: ${chatId}`);
    await messageService.sendMessage(chatId, `Anda mengirim: ${message}`);

    res.send("ok");
    return;
  }

  async sendMessageLskk(req, res) {
    const chatId = req.body.message.chat.id;
    const message = req.body.message.text;

    console.log(`Received message: ${message} from chat ID: ${chatId}`);
    await messageService.sendMessageLskk(chatId, `Anda mengirim: ${message}`);

    res.send("ok");
    return;
  }
}

module.exports = new Webhook();
