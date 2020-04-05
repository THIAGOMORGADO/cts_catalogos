const mongoose = require('mongoose');
const mongoosePaginete = require('mongoose-paginate');

const ImageSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
ImageSchema.plugin(mongoosePaginete);
module.exports = mongoose.model('Image', ImageSchema);
