const mongoose = require('mongoose');
const mongoosePaginaiton = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
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
});

UserSchema.plugin(mongoosePaginaiton);
module.exports = mongoose.model('Usuario', UserSchema);
