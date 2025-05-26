const mongoose = require("mongoose");

const CredSchema = new mongoose.Schema({
  id: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
});

const User = mongoose.model("User", CredSchema);

module.exports = User;
