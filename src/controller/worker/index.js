const User = require("../../model/telegram_model");
const Service = require("../../service/message");

class worker {
  async sendNotificationToAllUsers(messageTemplate) {
    try {
      const users = await User.find({});
      for (const user of users) {
        const message = messageTemplate.replace("{username}", user.userName);
        await Service.sendMessageLskk([user.chatId],message);
      }
    } catch (error) {
      console.error("Error sending notification to all users:", error);
    }
  }
}
module.exports = new worker();
