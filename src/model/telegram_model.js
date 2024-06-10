// models/user.js
const mongoose = require('mongoose');

// Definisi schema untuk pengguna
const userSchema = new mongoose.Schema({
  guidUser: String,
  userName: String,
  chatId: String,
  company: String
}, { versionKey: false });

// Buat dan ekspor model untuk pengguna
const User = mongoose.model('UserTelegram', userSchema);
module.exports = User;
