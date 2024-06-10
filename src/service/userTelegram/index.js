const model = require("../../model/telegram_model");
class UserTelegramService {
  async saveUser(payload) {
    try {
      const user = await model.findOne({
        chatId: payload.chatId,
        company: payload.company,
      });
      if (user) {
        console.log("user telah terdaftar...");
      } else {
        await model.create(payload);
        console.log("Berhasil simpan user baru...");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new UserTelegramService();
