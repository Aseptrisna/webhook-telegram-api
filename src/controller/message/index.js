const messageService = require("../../service/message");

class Message {

  async sendMessage(req, res) {

    const { chatId, message } = req.body;
   
    try {
      const result = await messageService.sendMessage(chatId, message);
      return {
        status: true,
        code: 200,
        message: "succes",
      };
    } catch (error) {
      return { status: false, code: 500, message: "Internal Server Error" };
    }
    
  }

  async sendMessageLskk(req, res) {
    const { chatId, message } = req.body;
    try {
      const result = await messageService.sendMessageLskk(chatId, message);
      return {
        status: true,
        code: 200,
        message: "succes",
      };
    } catch (error) {
      return { status: false, code: 500, message: "Internal Server Error" };
    }
  }
}

module.exports = new Message();
