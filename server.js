const dotenv = require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const { v4: uuidv4 } = require("uuid");
const mongoSevice = require("./src/service/userTelegram");
const config = require("./src/config");

// Ganti dengan token API bot Anda
const token = process.env.TOKEN;

// Buat bot yang menggunakan 'polling' untuk mengambil update baru
const bot = new TelegramBot(token, { polling: true });

// Array atau objek untuk menyimpan chat IDs pengguna
let users = {};
 config.Connection();
// Mencatat `chatId` pengguna ketika mereka mengirim pesan ke bot
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const username = msg.chat.username || msg.chat.first_name || "User";

  // Menyimpan chat ID
  users[username] = chatId;

  // Mengirim balasan ke pengguna
  bot.sendMessage(chatId, `Halo, ${username}! Chat ID Anda adalah ${chatId}`);

  // Menampilkan chat ID di konsol
  console.log(`User: ${username}, Chat ID: ${chatId}`);
  const data = {
    guidUser: uuidv4(),
    userName: username,
    chatId: chatId,
    company: "CSI",
  };
  // console.log(data);
  mongoSevice.saveUser(data)
});

 

// Contoh fungsi untuk mengirim pesan ke pengguna tertentu berdasarkan username
const sendMessageToUser = (username, message) => {
  const chatId = users[username];
  if (chatId) {
    bot
      .sendMessage(chatId, message)
      .then(() => {
        console.log("Pesan berhasil dikirim ke", username);
      })
      .catch((err) => {
        console.error("Kesalahan saat mengirim pesan:", err);
      });
  } else {
    console.log("Chat ID untuk pengguna ini tidak ditemukan");
  }
};

// Contoh penggunaan fungsi
setTimeout(() => {
  sendMessageToUser(
    "username_pengguna",
    "Ini adalah pesan dari bot Telegram Anda!"
  );
}, 30000); // Mengirim pesan setelah 30 detik

module.exports = {}