const messageService = require("../../service/message");

class Message {
  async sendMessage(req, res) {
    const { chatId, message } = req.body;

    try {
      await messageService.sendMessage(chatId, message);
      const result = {
        status: true,
        code: 200,
        message: "succes",
      };
      res.status(result.code).json(result);
    } catch (error) {
      const result = {
        status: false,
        code: 500,
        message: "Internal Server Error",
      };
      res.status(result.code).json(result);
    }
  }

  async sendMessageLskk(req, res) {
    const { chatId, message } = req.body;
    try {
      await messageService.sendMessageLskk(chatId, message);
      const result = {
        status: true,
        code: 200,
        message: "succes",
      };
      res.status(result.code).json(result);
    } catch (error) {
      const result = {
        status: false,
        code: 500,
        message: "Internal Server Error",
      };
      res.status(result.code).json(result);
    }
  }
}

module.exports = new Message();
