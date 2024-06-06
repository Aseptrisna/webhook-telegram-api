const messageService = require("../../service/message");

class Message {

  async sendMessage(req, res) {
    
    const { chatId, message } = req.body;
    const result = await messageService.sendMessage(chatId, message);
    console.log(result);
    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }

  async sendMessageLskk(req, res) {
    const { chatId, message } = req.body;
    const result = await messageService.sendMessageLskk(chatId, message);
    if (result.status) {
      res.status(result.code).json(result);
    } else {
      res.status(result.code).json({ message: result.message });
    }
  }
}

module.exports = new Message();
