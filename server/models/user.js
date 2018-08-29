const mongoose = require('mongoose');

const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  local: {
    username: String,
    password: String,
  },
});

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = (password, user) => {
  return bcrypt.compareSync(password, user.local.password);
}

module.exports = mongoose.model('User', userSchema);
