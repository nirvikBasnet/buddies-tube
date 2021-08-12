import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  joinedOn: {
    type: Date,
    default: new Date(),
    required: true,
  },
  lastLogin: {
    type: Date,
    default: new Date(),
    required: true,
  },
  subscriptions: {
    type: Array,
    default: [],
    required: true,
  },
  picture: {
    type: String,
    default: 'https://someplaceholder.com',
  },
  badges: {
    type: Array,
    default: ['new member'],
  },
});

const User = new model('User', userSchema);

export default User;