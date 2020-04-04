const mongoose = require('mongoose');
const mongoosePaginete = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});
ProductSchema.plugin(mongoosePaginete);

module.exports = mongoose.model('Product', ProductSchema);
