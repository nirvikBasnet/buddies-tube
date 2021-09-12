const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// we can add more fields later after we complete the authentication logic
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"]
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,

  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
});

//password hashing

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();

  }

  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);

  next();


})

const User = mongoose.model("User", UserSchema);

module.exports = User;